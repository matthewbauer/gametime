RetroPlayer = require 'gametime-player'
nointro = require 'gametime-nointro'
ipc = require 'ipc'
$ = require 'jquery'

# TODO: preferences window
keymaps =
  'player':
    ' ': 'joypad:0:b'
    'y': 'joypad:0:y'
    'a': 'joypad:0:a'
    'x': 'joypad:0:x'
    'b': 'joypad:0:b'
    'l': 'joypad:0:l'
    'r': 'joypad:0:r'
    'Enter': 'joypad:0:start'
    'Shift': 'joypad:0:select'
    'ArrowUp': 'joypad:0:up'
    'ArrowDown': 'joypad:0:down'
    'ArrowLeft': 'joypad:0:left'
    'ArrowRight': 'joypad:0:right'
consoles =
  'Super Nintendo Entertainment System': 'snes9x_next_libretro'
  'Game Boy Color': 'gambatte_libretro'
  'Game Boy': 'gambatte_libretro'
  'Game Boy Advance': 'vba_next_libretro'
  'Nintendo 64': 'mupen64plus_libretro'
  'Nintendo Entertainment System': 'fceumm_libretro'
  'Genesis': 'genesis_plus_gx_libretro'

$ ->
  timer = null
  hideOverlay = ->
    $('.button-quit').hide()
    timer = null
  showOverlay = ->
    clearTimeout timer if timer
    $('.button-quit').show()
  addEventListener 'mouseenter', showOverlay
  addEventListener 'mousemove', showOverlay
  addEventListener 'mouseout', hideOverlay

  player = null
  $('.button-quit').on 'click', ->
    ipc.send('player-close', player)

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

  if loadSettings.rom
    nointro.getROM(loadSettings.rom).then (buffer) ->
      RetroPlayer.unserialize
        corename: consoles[loadSettings.rom.console]
        game: buffer
      .then ([core, game, save]) ->
        gl = $('canvas')[0].getContext 'webgl'
        audio = new AudioContext()
        input = new Input keymaps.player
        player = new RetroPlayer gl, audio, input.state, core, game, save
        player.start()
