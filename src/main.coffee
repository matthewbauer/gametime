app = require('app')
BrowserWindow = require('browser-window')

autoUpdater = require('auto-updater')
#autoUpdater.setFeedUrl('http://easyretro.herokuapp.com/releases/latest' +
#  '?version=' + app.getVersion())

require('crash-reporter').start()

window = null

app.on('window-all-closed', ->
  app.quit()
)

app.on('ready', ->
  window = new BrowserWindow(
    width: 800
    height: 600
    title: 'GameTime'
    resizable: true
    center: true
  )
  window.loadUrl('file://' + __dirname + '/index.html')
  window.on('closed', ->
    window = null
  )
)
