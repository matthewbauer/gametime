View = require './view'
CardView = require './card-view'

$ = require 'jquery'
_ = require 'underscore'

module.exports =
class CardsView extends View
  limit: 20
  rendered: 0
  scrollTrigger: 100
  cardsPerLine: 5

  @content: ->
    @ul class: 'cards'

  constructor: (@cards, @view) ->
    super()
    $(window).on 'scroll', =>
      if $(window).scrollTop() >= $(document).height() - $(window).height() - @scrollTrigger
        @addMore @limit
    @show()
    @cards.on 'push', @add

  show: ->
    @on 'select:up', => @move 0, -1
    @on 'select:left', => @move -1, 0
    @on 'select:right', => @move 1, 0
    @on 'select:down', => @move 0, 1
    super()

  addMore: (more) ->
    @limit += more
    _.each @cards.list[@rendered..], @add, @

  move: (x, y) ->
    index = @children().index $('.selected')
    newIndex = index + x + y * @cardsPerLine
    if newIndex >= 0
      selected = @children().eq(newIndex).view()
      selected.select()
      $(window).scrollTop selected.position().top

  add: (card) =>
    if @rendered < @limit
      @append new @view card
      @rendered += 1
