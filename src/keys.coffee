$ = require 'jquery'
CSON = require 'season'
path = require 'path'
keymaps = CSON.readFileSync CSON.resolve path.normalize './keymaps/base.cson'

$(window).on 'keydown', (event) ->
  for selector, keys of keymaps
    if event.key of keys
      $(selector).view?()?.trigger(keys[event.key], event)
      if keys.down
        $(selector).view?()?.trigger(keys.down, keys[event.key])
      event.preventDefault()

$(window).on 'keyup', (event) ->
  for selector, keys of keymaps
    if event.key of keys
      $(selector).view?()?.trigger("#{keys[event.key]}:keyup", event)
      if keys.up
        $(selector).view?()?.trigger(keys.up, keys[event.key])
      event.preventDefault()
