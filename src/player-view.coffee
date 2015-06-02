RetroPlayer = require 'gametime-player'
Input = require './player-input'

$ = require 'jquery'

module.exports =
class PlayerView
  constructor: (@core, @game, @save) ->
    @canvas = document.createElement 'canvas'
    @canvas.classList.add 'player'
    document.body.appendChild @canvas
    @gl = @canvas.getContext 'webgl'
    @audio = new AudioContext()
    @input = new Input @canvas
    @player = new RetroPlayer @gl, @audio, @input.state, @core, @game, @save
    @player.start()
  stop: ->
    @player.stop()
    @canvas.parentNode.removeChild(@canvas)
    $('.games').show()
