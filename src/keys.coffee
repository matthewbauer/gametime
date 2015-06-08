path = require 'path'

$ = require 'jquery'
CSON = require './cson'

keymaps = CSON.requireFile '../keymaps/base'

$(window).on 'keydown', (event) ->
  for selector, keys of keymaps
    if event.key of keys
      $(selector).trigger keys[event.key], event
      if keys.down
        $(selector).trigger keys.down, keys[event.key], event
      event.preventDefault()

$(window).on 'keyup', (event) ->
  for selector, keys of keymaps
    if event.key of keys
      if keys.up
        $(selector).trigger keys.up, keys[event.key], event
      event.preventDefault()
