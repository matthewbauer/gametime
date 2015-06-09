cson = require 'CSON'
module.exports = cson
cson._requireFile = cson.requireFile
path = require 'path'

module.exports.requireFile = (filename) ->
  try
    return require path.resolve "#{__dirname}/#{filename}.json"
  catch error
    return cson._requireFile path.resolve "#{__dirname}/#{filename}.cson"
