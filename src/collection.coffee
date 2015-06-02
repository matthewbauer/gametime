{EventEmitter} = require 'events'

module.exports =
class Collection extends EventEmitter
  list: []
  push: (args...) ->
    @list.push args...
    @emit 'push', args...
