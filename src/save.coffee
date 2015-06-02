path = require 'path'
fs = require 'fs'

app = (require 'remote').require 'app' # alternative?
module.exports.getSavePath = getSavePath = (rom) ->
  path.join (app.getPath 'userData'), 'saves', rom.file_name

module.exports.getSave = (rom) ->
  new Promise (resolve, reject) ->
    rompath = getSavePath rom
    fs.exists rompath, (exists) ->
      if exists
        fs.readFile rompath, (err, save) ->
          if err or not save
            resolve null
          else
            resolve save
      else
        resolve null
