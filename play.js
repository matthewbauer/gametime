import './play.css!'
import querystring from 'querystring'
import 'x-game'
import nointro from 'gametime-nointro'
import KeyPad from 'keypad'
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
  var player = document.createElement('canvas', 'x-retro')
  document.body.appendChild(player)
  player.inputs = []
  if ('getGamepads' in navigator)
    player.inputs = navigator.getGamepads()
  if (!player.inputs[0])
    player.inputs[0] = new KeyPad(window, {
      9: 8,
      13: 9,
      16: 8,
      18: 1,
      32: 0,
      37: 14,
      38: 12,
      39: 15,
      40: 13,
      65: 1,
      66: 0,
      68: 15,
      73: 3,
      74: 2,
      75: 0,
      76: 1,
      82: 5,
      83: 13,
      87: 12,
      88: 3,
      89: 2,
      90: 3,
      91: 2,
      222: 8
    })
  return Promise.all([
    nointro.getROM(game),
    getCore(game),
    localForage.getItem(game.romHashMD5)
  ]).then(function([buffer, core, save]) {
    player.core = core
    player.game = new Uint8Array(buffer)
    if (save)
      player.save = save
    setInterval(function() {
      localForage.setItem(game.romHashMD5, new Uint8Array(player.save))
    }, 1000)
    player.start()
  })
}

play(querystring.parse(location.search.substr(1)))
