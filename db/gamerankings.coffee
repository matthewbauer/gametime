fs = require('fs')

sqlite3 = require('sqlite3')
db = new sqlite3.Database('gametime.db')

cheerio = require('cheerio')

dir = 'data/gamerankings'
fs.readdir dir, (err, files) ->
  files.forEach (file) ->
    filename = dir + '/' + file
    fs.readFile filename, (err, data) ->
      $ = cheerio.load(data)
      $('.pod .body table tr').each ->
        col1 = $($(this).children()[0])
        col2 = $($(this).children()[1])
        col3 = $($(this).children()[2])
        col4 = $($(this).children()[3])

        thumb = col1.find('img').attr('src')
        platform = col2.text()
        name = col3.find('a').text()
        publisher = $(col3.contents()[2]).text().trim().split(', ')[0]
        year = parseInt($(col3.contents()[2]).text().trim().split(', ')[1])
        rating = parseFloat(col4.find('span').text())
        reviews = parseInt($(col4.contents()[2]).text())

        stmt = db.prepare('update Game set publisher=?,year=?,gameranking=?,
                    gameranking_reviews=? where title=?')
        stmt.run(publisher, year, rating, reviews, name)
        stmt.finalize()

        stmt = db.prepare('insert or ignore into Artwork (url, game) values (?, ?)')
        stmt.run(thumb, name)
        stmt.finalize()
