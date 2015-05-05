$ = require('jquery')
_ = require('underscore')

$ ->
  Backbone = require('backbone')
  Backbone.$ = $

  player = require('gametime-player')
  db = require('gametime-db')
  settings = require('./settings')
  archive = require('./archive')

  app.Game = Backbone.Model.extend
    getROM: (region, cb) ->
      stmt = db.prepare('select Console.long_name as nointro_console, console, ROM.long_name from ROM join Console on ROM.console = Console.name where game=? and region=? order by size')
      stmt.get @get('title'), region, (err, row) ->
        archive.getROM row.nointro_console, row.long_name, (buffer) ->
          cb(row.console, buffer)
      stmt.finalize()

  app.Games = Backbone.Collection.extend
    model: app.Game
    comparator: 'title'
    addGame: (game) ->
      @add new @model(game)
      return
    fetch: ->
      db.each 'select title from Game order by gameranking desc limit 10',
        (err, row) => @addGame(row)

  app.GameView = Backbone.View.extend
    tagName: 'li'
    events: click: 'play'
    template: _.template($('#game').html())
    initialize: ->
      @listenTo @model, 'change', @render
      @listenTo @model, 'destroy', @remove
      @listenTo @model, 'visible', @toggleVisible
    isHidden: ->
      false
    toggleVisible: ->
      @$el.toggleClass 'hidden', @isHidden()
    render: ->
      @toggleVisible()
      @$el.toggleClass 'game'
      @$el.html @template(@model.toJSON())
      this
    play: ->
      @model.getROM settings.region, (c, buffer) ->
        $('#games').hide()
        player(window, settings.consoles[c][0], buffer, settings)

  app.GamesView = Backbone.View.extend
    el: '#games'
    initialize: ->
      @listenTo @collection, 'add', @addOne
      @listenTo @collection, 'reset', @addAll
      @listenTo @collection, 'filter', @filterAll
    addOne: (game) ->
      view = new app.GameView(model: game)
      @$el.append view.render().el
    addAll: ->
      @$el.html ''
      @collection.each @addOne, this
    filterOne: (game) ->
      game.trigger 'visible'
    filterAll: ->
      @collection.each @filterOne, this

  games = new app.Games()
  games.fetch()
  new app.GamesView(collection: games)
