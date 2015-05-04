sqlite3 = require('sqlite3')
db = new sqlite3.Database('gametime.db')
request = require('request')

url = 'http://www.giantbomb.com/api/search/?api_key=c2355142693b4018d6b4ef365833d7e8193f96fd&format=json&resources=game&query='

db.each 'select * from Game', (err, game) ->
  request url + game.title, (err, response, body) ->
    if !err and response.statusCode == 200
      newGame = JSON.parse(body).results[0]
      if newGame
        stmt = db.prepare('update Game set deck=?,description=?,giantbomb_id=? where title=?')
        stmt.run(newGame.deck, newGame.description, newGame.id, game.title)
        stmt.finalize()
