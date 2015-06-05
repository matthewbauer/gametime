RetroPlayer = require 'gametime-player'
Input = require './player-input'

$ = require 'jquery'

{writeSave} = require './save'

module.exports =
class PlayerView
  constructor: (@core, @game, @save, @rom) ->
    @canvas = $('.player')
    @canvas.on 'player:quit', @stop
    @gl = @canvas[0].getContext 'webgl'
    @audio = new AudioContext()
    @input = new Input @canvas
    @player = new RetroPlayer @gl, @audio, @input.state, @core, @game, @save
    height = $(window).height()
    window.resizeTo height / @player.av_info.geometry.aspect_ratio, height
    @player.start()
  stop: =>
    @player.stop()
    writeSave(@rom, @core)
    location.href = 'index.html'
