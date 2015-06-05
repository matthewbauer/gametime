RetroPlayer = require 'gametime-player'

module.exports =
class Input
  states: {}
  @parse: (event) ->
    [device, port, id] = event.toUpperCase().split ':'
    id = RetroPlayer.retro["DEVICE_ID_#{device}_#{id}"]
    device = RetroPlayer.retro["DEVICE_#{device}"]
    port = parseInt port
    [port, device, id]
  constructor: (input) ->
    input.on 'retrodown', (event, arg) =>
      [port, device, id] = Input.parse arg
      @states[port] ?= {}
      @states[port][device] ?= {}
      @states[port][device][id] = true
    input.on 'retroup', (event, arg) =>
      [port, device, id] = Input.parse arg
      @states[port] ?= {}
      @states[port][device] ?= {}
      @states[port][device][id] = false
  state: (port, device, idx, id) =>
    if port of @states
      if device of @states[port]
        return 1 if @states[port][device][id]
    return 0
