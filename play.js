import './play.css!'
import querystring from 'querystring'
import 'x-game'
import nointro from 'gametime-nointro'
import localForage from 'localforage'

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
  var player = document.createElement('canvas', 'x-game')
  document.body.appendChild(player)
  player.inputs = []
  return Promise.all([
    nointro.getROM(game),
    getCore(game),
    localForage.getItem(game.romHashMD5)
  ]).then(function([buffer, core, save]) {
    player.core = core
    player.game = new Uint8Array(buffer)
    if (save)
      player.save = new Uint8Array(save)
    player.core.set_input_poll(function() {
      player.player.inputs = navigator.getGamepads()
    })
    setInterval(function() {
      localForage.setItem(game.romHashMD5, new Uint8Array(player.save))
    }, 1000)
    player.start()
  })
}

play(querystring.parse(location.search.substr(1)))
