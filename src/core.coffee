path = require 'path'

CSON = require 'season'

{Core} = require 'node-retro'
{getCore} = require 'gametime-retro'

cores = CSON.readFileSync CSON.resolve path.normalize "./cores/base"

module.exports.getCore = (rom) ->
  new Promise (resolve, reject) ->
    getCore cores[rom.console]
    .then (path) ->
      resolve new Core path
    , reject
