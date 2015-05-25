Menu = require 'menu'
BrowserWindow = require 'browser-window'
app = require 'app'
fs = require 'fs-plus'
ipc = require 'ipc'
path = require 'path'
os = require 'os'
net = require 'net'
url = require 'url'

{EventEmitter} = require 'events'

AppMenu = require './appmenu'
Player = require './player'
Games = require './games'

module.exports =
class Application extends EventEmitter
  constructor: (@pkg) ->
    @windows = []

    app.on 'window-all-closed', ->
      app.quit() if process.platform in ['win32', 'linux']

    @menu = new AppMenu @pkg

    @menu.on 'application:quit', ->
      app.quit()

    @menu.on 'window:reload', ->
      BrowserWindow.getFocusedWindow().reload()

    @menu.on 'window:toggle-full-screen', ->
      focusedWindow = BrowserWindow.getFocusedWindow()
      fullScreen = true
      if focusedWindow.isFullScreen()
        fullScreen = false

      focusedWindow.setFullScreen fullScreen

    @menu.on 'window:toggle-dev-tools', ->
      BrowserWindow.getFocusedWindow().toggleDevTools()

    appWindow = new Games()
    appWindow.show()
    @windows.push appWindow
    appWindow.on 'closed', =>
      @removeAppWindow appWindow
    @menu.attachToWindow appWindow

    ipc.on 'app:play', (event, rom) =>
      playWindow = new Player rom
      playWindow.show()
      @windows.push playWindow
      playWindow.on 'closed', =>
        @removeAppWindow playWindow
      @menu.attachToWindow playWindow

  removeAppWindow: (appWindow) =>
    @windows.splice idx, 1 for w, idx in @windows when w is appWindow
