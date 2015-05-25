app = require 'app'
fs = require 'fs'
ipc = require 'ipc'
path = require 'path'
os = require 'os'
net = require 'net'
url = require 'url'

{EventEmitter} = require 'events'
BrowserWindow = require 'browser-window'

module.exports =
class Games extends EventEmitter
  constructor: ->
    @window = new BrowserWindow
      width: 850
      height: 825
      title: 'GameTime'
      center: true
      resizable: false
      frame: true
      'web-preferences':
        javascript: true

    @window.on 'closed', (e) =>
      this.emit 'closed', e

    @window.on 'devtools-opened', (e) =>
      @window.webContents.send 'window:toggle-dev-tools', true

    @window.on 'devtools-closed', (e) =>
      @window.webContents.send 'window:toggle-dev-tools', false

  show: ->
    @window.loadUrl url.format
      protocol: 'file'
      pathname: path.resolve __dirname, '..', '..', 'static', 'games.html'
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
