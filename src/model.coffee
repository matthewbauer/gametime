module.exports =
class Model
  constructor: (@object) ->
    @[key] = @object[key] for key of @object
