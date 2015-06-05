$ = require 'jquery'
CSON = require 'season'
path = require 'path'
keymaps = CSON.readFileSync CSON.resolve path.normalize './keymaps/base.cson'

$(window).on 'keydown', (event) ->
  for selector, keys of keymaps
    if event.key of keys
      $(selector).trigger(keys[event.key], event)
      if keys.down
        $(selector).trigger(keys.down, keys[event.key], event)
      event.preventDefault()

$(window).on 'keyup', (event) ->
  for selector, keys of keymaps
    if event.key of keys
      if keys.up
        $(selector).trigger(keys.up, keys[event.key], event)
      event.preventDefault()
