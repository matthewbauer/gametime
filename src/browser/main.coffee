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

app.on 'ready', ->
  Application = require './application'
  global.application = new Application(pkg: require '../../package.json')
