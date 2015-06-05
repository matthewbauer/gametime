Collection = require './collection'

db = require './db_asar'

Game = require './game'

module.exports =
class Games extends Collection
  comparator: 'gameranking'
  constructor: ->
    db.each "select * from Game order by #{@comparator} desc", (err, row) =>
      @push new Game row
