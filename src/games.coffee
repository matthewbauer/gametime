Model = require './Model'
Collection = require './collection'
db = require './db_asar'

{getCore} = require './core'
{getSave} = require './save'
{getROM} = require 'gametime-nointro'

class Game extends Model
  findROM: ->
    new Promise (resolve, reject) =>
      db.get "select Console.nointro_name as nointro_console, ROM.*
      from ROM join Console on ROM.console = Console.name where game =
      '#{@name}'", (err, rom) ->
        if err or not rom
          reject err
        else
          resolve rom
  load: ->
    new Promise (resolve, reject) =>
      @findROM().then (rom) ->
        Promise.all [
          getCore rom
          getROM rom
          getSave rom
        ]
        .then resolve, reject

module.exports =
class Games extends Collection
  comparator: 'gameranking'
  constructor: ->
    db.each "select * from Game order by #{@comparator} desc", (err, row) =>
      @push new Game row
