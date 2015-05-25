app = require 'app'
gh_releases = require 'electron-gh-releases'

options =
  repo: 'matthewbauer/gametime'
  currentVersion: app.getVersion()

update = new gh_releases options, (auto_updater) ->
  auto_updater.on 'update-downloaded', (e, rNotes, rName, rDate, uUrl, quitAndUpdate) ->
    quitAndUpdate()

update.check (err, status) ->
  if not err and status
    update.download()

handleStartupEvent = ->
  if process.platform != 'win32'
    return false
  switch process.argv[1]
    when '--squirrel-install', '--squirrel-updated'
      app.quit()
      return true
    when '--squirrel-uninstall'
      app.quit()
      return true
    when '--squirrel-obsolete'
      app.quit()
      return true

if handleStartupEvent()
  return

app.on 'ready', ->
  Application = require './application'
  new Application require '../../package.json'
