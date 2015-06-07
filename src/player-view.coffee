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
    newwidth = height / @player.av_info.geometry.aspect_ratio
    window.resizeTo newwidth, height
    window.moveBy ($(window).width() - newwidth) / 2, 0
    @player.start()
  stop: =>
    writeSave @rom, @core.serialize()
    @player.stop()
    location.href = 'index.html'
