import './play.css!'
import querystring from 'querystring'
import 'x-game'
import nointro from 'gametime-nointro'
import localForage from 'localforage'
import settings from './settings.json!'

function getCore(game) {
  return System.import(settings.cores[game.systemShortName])
}

var player = document.createElement('canvas', 'x-game')
document.body.appendChild(player)
player.inputs = []

function play(game) {
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
      if ('getGamepads' in navigator)
        player.player.inputs = navigator.getGamepads()
      for (var g in player.player.inputs)
        if (player.player.inputs[g] && g !== 'length' && g !== 'item' && player.player.inputs[g].buttons[16] && player.player.inputs[g].buttons[16].pressed)
          history.back()
    })
    function onkey(event) {
      if (player.player && settings.keys.hasOwnProperty(event.which)) {
        if (!player.player.inputs[0])
          player.player.inputs[0] = {buttons: {}}
        if (!player.player.inputs[0].buttons[settings.keys[event.which]])
          player.player.inputs[0].buttons[settings.keys[event.which]] = {}
        player.player.inputs[0].buttons[settings.keys[event.which]].pressed = event.type === 'keydown'
        event.preventDefault()
      }
    }
    window.addEventListener('keydown', onkey)
    window.addEventListener('keyup', onkey)
    setInterval(function() {
      localForage.setItem(game.romHashMD5, new Uint8Array(player.save))
    }, 1000)
    player.start()
  })
}

play(querystring.parse(location.search.substr(1)))
