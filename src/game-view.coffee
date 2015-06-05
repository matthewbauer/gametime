CardView = require './card-view'
querystring = require 'querystring'

module.exports =
class GameView extends CardView
  constructor: (@game) ->
    super @game
  enter: =>
    location.href = "player.html?#{querystring.stringify @game}"
