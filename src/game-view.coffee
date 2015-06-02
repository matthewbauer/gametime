CardView = require './card-view'

module.exports =
class GameView extends CardView
  constructor: (@game) ->
    super @game
  enter: =>
    @trigger 'game:play', @game
