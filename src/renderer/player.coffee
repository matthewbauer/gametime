RetroPlayer = require 'gametime-player'
nointro = require 'gametime-nointro'
ipc = require 'ipc'
url = require 'url'
$ = require 'jquery'
CSON = require 'season'
path = require 'path'
remote = require 'remote'
fs = require 'fs'
app = remote.require 'app'

class Input
  states: {}
  keydown: {}
  keyup: {}
  constructor: (bindings) ->
    for key, binding of bindings
      [device, port, id] = binding.toUpperCase().split ':'
      id = RetroPlayer.retro["DEVICE_ID_#{device}_#{id}"]
      device = RetroPlayer.retro["DEVICE_#{device}"]
      port = parseInt port
      do (key, id, device, port) =>
        @keyup[key] = =>
          @states[port] ?= {}
          @states[port][device] ?= {}
          @states[port][device][id] = false
        @keydown[key] = =>
          @states[port] ?= {}
          @states[port][device] ?= {}
          @states[port][device][id] = true
    addEventListener 'keydown', (event) =>
      if event.key of @keydown
        @keydown[event.key]()
        event.preventDefault()
    addEventListener 'keyup', (event) =>
      if event.key of @keyup
        @keyup[event.key]()
        event.preventDefault()
  state: (port, device, idx, id) =>
    if port of @states
      if device of @states[port]
        return 1 if @states[port][device][id]
    return 0

cores = CSON.readFileSync CSON.resolve path.normalize "#{__dirname}/../../cores/global"
keymaps = CSON.readFileSync CSON.resolve path.normalize "#{__dirname}/../../keymaps/global"

player = null
rom = (url.parse location.href, true).query
corename = cores[rom.console]

getSavePath = ->
  path.join (app.getPath 'userData'), 'saves', rom.file_name

addEventListener 'beforeunload', ->
  fs.writeFileSync getSavePath(), player.core.serialize()

if fs.existsSync getSavePath()
  save = fs.readFileSync getSavePath()

nointro.getROM rom
.then (buffer) ->
  RetroPlayer.unserialize
    corename: corename
    game: buffer
    save: save
  .then ([core, game, save]) ->
    gl = document.getElementById('canvas').getContext 'webgl'
    audio = new AudioContext()
    input = new Input keymaps
    player = new RetroPlayer gl, audio, input.state, core, game, save
    player.start()
