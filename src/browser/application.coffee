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
_ = require 'underscore-plus'
{spawn} = require 'child_process'

AppMenu = require './appmenu'
Player = require './player'
Games = require './games'

module.exports =
class Application
  _.extend @prototype, EventEmitter.prototype

  constructor: (options) ->
    {@resourcePath, @devMode} = options

    @pkgJson = require '../../package.json'
    @windows = []

    app.on 'window-all-closed', ->
      app.quit() if process.platform in ['win32', 'linux']

    @menu = new AppMenu(pkg: @pkgJson)

    @menu.on 'application:quit', -> app.quit()

    @menu.on 'window:reload', ->
      BrowserWindow.getFocusedWindow().reload()

    @menu.on 'window:toggle-full-screen', ->
      focusedWindow = BrowserWindow.getFocusedWindow()
      fullScreen = true
      if focusedWindow.isFullScreen()
        fullScreen = false

      focusedWindow.setFullScreen(fullScreen)

    @menu.on 'window:toggle-dev-tools', ->
      BrowserWindow.getFocusedWindow().toggleDevTools()

    playWindow = null
    appWindow = new Games(options)
    appWindow.show()
    @windows.push(appWindow)
    appWindow.on 'closed', =>
      @removeAppWindow(appWindow)
    @menu.attachToWindow(appWindow)

    getSavePath = (rom) ->
      path.join app.getPath('userData'), 'saves', rom.file_name

    ipc.on 'save', (event, options) ->
      #fs.writeFile getSavePath(options.rom), options.save

    ipc.on 'play', (event, rom) =>
      save = null
      if fs.existsSync getSavePath rom
        save = fs.readFileSync getSavePath rom
      playWindow = new Player
        rom: rom
        save: save
      playWindow.show()
      @windows.push(playWindow)
      playWindow.on 'closed', =>
        @removeAppWindow()
      @menu.attachToWindow(playWindow)

  # Removes the given window from the list of windows, so it can be GC'd.
  #
  # options -
  #   :appWindow - The {AppWindow} to be removed.
  removeAppWindow: (appWindow) =>
    @windows.splice(idx, 1) for w, idx in @windows when w is appWindow
