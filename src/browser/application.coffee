url = require 'url'
path = require 'path'

app = require 'app'

BrowserWindow = require 'browser-window'

module.exports =
class Application
  constructor: (@pkg) ->
    app.on 'window-all-closed', ->
      app.quit() if process.platform in ['win32', 'linux']

    @window = new BrowserWindow
      width: 1200
      height: 600
      title: 'GameTime'
      center: true
      frame: true
      'web-preferences':
        javascript: true
        webgl: true
        webaudio: true
        'overlay-scrollbars': true
    @window.loadUrl url.format
      protocol: 'file'
      pathname: path.resolve __dirname, '..', '..', 'static', 'index.html'
    @window.on 'closed', =>
      @window = null
