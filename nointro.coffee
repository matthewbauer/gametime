fs = require('fs')
xml2js = require('xml2js')
data = 'data/no-intro'
parser = new xml2js.Parser()

sqlite3 = require('sqlite3')
db = new sqlite3.Database('gametime.db')

# Using official no-intro naming conventions
# http://datomatic.no-intro.org/stuff/The%20Official%20No-Intro%20Convention%20(20071030).zip
noIntroROM = /(?:\[([^\]]*)\] )?([^\)]*) \(([^\)]*)\)(?: \(([^\)]*)\))?(?: \(([^\)]*)\))?(?: \(([^\)]*)\))?(?: \(([^\)]*)\))?(?: \(([^\)]*)\))?(?: \(([^\)]*)\))?(?: \[([^\]]*)\])?/
noIntroConsole = /(.*?) - (?:(.*) - )?(.*) Parent-Clone/
noIntroGame = /(?:(.*) - )?(.*)/

fs.readdir data, (err, files) ->
  files.forEach (file) ->
    filename = data + '/' + file
    if !fs.existsSync(filename)
      return
    fs.readFile filename, (err, data) ->
      parser.parseString data, (err, result) ->
        longConsoleName = result.datafile.header[0].description[0]
        [[], company, [], consoleName] = longConsoleName.match(noIntroConsole)

        s = db.prepare('insert or ignore into Company (name) values (?)')
        s.run(company)
        s.finalize()

        s = db.prepare('insert into Console (name, company, long_name) ' +
                        'values (?, ?, ?)')
        s.run(consoleName, company, longConsoleName.replace(' Parent-Clone',''))
        s.finalize()

        result.datafile.game.forEach((game) ->
          longName = game.description[0]
          [[], bios, name, region, misc...] = longName.match(noIntroROM)
          gameName = name
          if game.$.cloneof
            match = game.$.cloneof.match(noIntroROM)
            if not match
              gameName = game.$.cloneof
            else
              gameName = match[2]
          [[], title1, title2] = gameName.match(noIntroGame)
          title = title2
          subtitle = null
          if title1
            title = title1
            subtitle = title2
          s = db.prepare('insert or ignore into Game (title, subtitle, bios)' +
                          ' values (?, ?, ?)')
          s.run(title, subtitle, if bios then true else false)
          s.finalize()

          region = null
          if game.release
            region = game.release[0].$.region

          s = db.prepare('insert or ignore into Region (name) values (?)')
          s.run(region)
          s.finalize()

          s = db.prepare('insert or ignore into ROM' +
                            '(file_name, size, md5, crc, sha1,' +
                            'long_name, console, game, region) values ' +
                            '(?, ?, ?, ?, ?, ?, ?, ?, ?)')
          s.run(game.rom[0].$.name, parseInt(game.rom[0].$.size),
                    parseInt(game.rom[0].$.md5, 16),
                    parseInt(game.rom[0].$.crc, 16),
                    parseInt(game.rom[0].$.sha1, 16),
                    longName, consoleName, gameName, region)
          s.finalize()
        )
