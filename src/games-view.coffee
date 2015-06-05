GameView = require './game-view'
CardsView = require './cards-view'
PlayerView = require './player-view'
url = require 'url'

module.exports =
class GamesView extends CardsView
  constructor: (@games) ->
    super @games, GameView
