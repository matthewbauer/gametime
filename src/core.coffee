CSON = require 'season'
path = require 'path'

getCore = require 'gametime-player/node_modules/node-retro/get-core'
cores = CSON.readFileSync CSON.resolve path.normalize "./cores/base"

module.exports.getCore = (rom) ->
  getCore cores[rom.console]
