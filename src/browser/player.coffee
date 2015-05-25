app = require 'app'
fs = require 'fs'
ipc = require 'ipc'
path = require 'path'
os = require 'os'
net = require 'net'
url = require 'url'
CSON = require 'season'

{EventEmitter} = require 'events'
BrowserWindow = require 'browser-window'

module.exports =
class Player extends EventEmitter
  constructor: (@rom) ->
    @window = new BrowserWindow
      width: 600
      height: 625
      title: 'GameTime'
      center: true
      resizable: true
      show: true
      fullscreen: true
      'web-preferences':
        javascript: true
        webgl: true
        webaudio: true

    @window.on 'closed', (e) =>
      @emit 'closed', e

    @window.on 'close', (e) =>
      @emit 'close', e

    @window.on 'devtools-opened', (e) =>
      @window.webContents.send 'window:toggle-dev-tools', true

    @window.on 'devtools-closed', (e) =>
      @window.webContents.send 'window:toggle-dev-tools', false

  show: ->
    @window.loadUrl url.format
      protocol: 'file'
      pathname: path.resolve __dirname, '..', '..', 'static', 'player.html'
      query: @rom
    @window.show()

  reload: ->
    @window.webContents.reload()

  toggleFullScreen: ->
    @window.setFullScreen not @window.isFullScreen()

  toggleDevTools: ->
    @window.toggleDevTools()

  close: ->
    @window.close()
    @window = null
