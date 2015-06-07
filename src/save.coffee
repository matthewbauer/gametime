path = require 'path'
fs = require 'fs'

app = (require 'remote').require 'app' # alternative?
module.exports.getSavePath = getSavePath = (rom) ->
  path.join (app.getPath 'userData'), 'saves', (rom.md5.toString 16)

module.exports.getSave = (rom) ->
  new Promise (resolve, reject) ->
    rompath = getSavePath rom
    fs.exists rompath, (exists) ->
      if not exists
        resolve null
        return
      fs.readFile rompath, (err, save) ->
        if err or not save
          resolve null
          return
        resolve save

module.exports.writeSave = (rom, save) ->
  fs.writeFile (getSavePath rom), save
