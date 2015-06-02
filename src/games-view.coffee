GameView = require './game-view'
CardsView = require './cards-view'
PlayerView = require './player-view'

module.exports =
class GamesView extends CardsView
  constructor: (@games) ->
    super @games, GameView
    @on 'game:play', (event, game) =>
      game.load().then ([core, rom, save]) =>
        @hide()
        new PlayerView(core, rom, save)
