CSON = require './cson'

path = require 'path'

{Core} = require 'node-retro'
{getCore} = require 'gametime-retro'

cores = CSON.requireFile '../cores/base'

module.exports.getCore = (rom) ->
  new Promise (resolve, reject) ->
    getCore cores[rom.console]
    .then (path) ->
      resolve new Core path
    , reject
