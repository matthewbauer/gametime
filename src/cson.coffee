cson = require 'CSON'

module.exports = cson
cson._requireFile = cson.requireFile
module.exports.requireFile = (filename) ->
  try
    return cson._requireFile require.resolve "#{filename}.json"
  catch error
    return cson._requireFile require.resolve "#{filename}.cson"
