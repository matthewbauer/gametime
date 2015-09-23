import './play.css!'
import querystring from 'querystring'
import retro from 'x-retro'
import nointro from 'gametime-nointro'

function getCore(game) {
  return System.import({
    '32X': 'picodrive',
    '5200': 'mess',
    '7800': 'prosystem',
    'ColecoVision': 'colem',
    'FDS': 'snes9x-next',
    'GB': 'gambatte',
    'GBC': 'gambatte',
    'GBA': 'vba-next',
    'GG': 'picodrive',
    'Jaguar': 'virtualjaguar',
    'Lynx': 'handy',
    'MD': 'picodrive',
    'N64': 'mupen64plus',
    'NES': 'nestopia',
    'NGP': 'mame',
    'NGPC': 'mame',
    'PCE': 'pcejin',
    'SG1000': 'picodrive',
    'SMS': 'picodrive',
    'SNES': 'snes9x-next',
    'SuperGrafx': 'pcejin',
    'VB': 'vba-next',
    'Vectrex': 'vecx',
    'WonderSwan': 'oswan',
    'WonderSwan Color': 'oswan',
    'MAME': 'mame',
    'PSX': 'pcsx',
    'SCD': 'picodrive',
    'Saturn': 'yabause',
    'PCECD': 'pcejin',
    'PSP': 'ppsspp',
    'NDS': 'desmume',
    '2600': 'mess',
    'Odyssey2': 'o2em',
    'Intellivision': 'nostalgia'
  }[game.systemShortName])
}

function play(game) {
  return Promise.all([
    nointro.getROM(game),
    getCore(game)
  ]).then(function([buffer, core]) {
    var player = document.createElement('canvas', 'x-retro')
    player.md5 = game.romHashMD5
    player.inputs = []
    player.core = core
    player.game = new Uint8Array(buffer)
    document.body.appendChild(player)
    player.start()
  })
}

play(querystring.parse(location.search.substr(1)))
