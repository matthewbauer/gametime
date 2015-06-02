View = require './view'

module.exports =
class CardView extends View
  @content: (@model) ->
    @li class: 'card', =>
      @img class: 'image', src: @model.giantbomb_image
      @p class: 'title', @model.title
      @p class: 'score', @model.gameranking
  initialize: (@model) ->
    @on 'mouseenter', 'img', @select
    @on 'click', 'img', @enter
    @on 'select:enter', @enter
  select: =>
    @siblings('.selected').view()?.deselect()
    @addClass('selected')
  deselect: =>
    @removeClass('selected')
  enter: ->
