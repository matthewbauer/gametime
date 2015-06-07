Model = require './Model'
db = require './db_asar'
PlayerView = require './player-view'

{getCore} = require './core'
{getSave} = require './save'
{getROM} = require 'gametime-nointro'

module.exports =
class Game extends Model
  findROM: ->
    new Promise (resolve, reject) =>
      db.get "select Console.nointro_name as nointro_console, ROM.*
      from ROM join Console on ROM.console = Console.name where game =
      '#{@name}'", (err, rom) ->
        if err or not rom
          reject err
          return
        resolve rom
  @loadROM: (rom) ->
    Promise.all [
      getCore rom
      getROM rom
      getSave rom
    ]
