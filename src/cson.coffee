module.exports.requireFile = (filename) ->
  try
    cson = require 'CSON'

    module.exports = cson
    cson._requireFile = cson.requireFile
    try
      return cson._requireFile require.resolve "#{filename}.json"
    catch error
      return cson._requireFile require.resolve "#{filename}.cson"
  catch error
    return require filename
