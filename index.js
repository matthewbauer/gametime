import games from 'openvgdb'
import GamesView from './games-view'

if (navigator.serviceWorker)
  navigator.serviceWorker.register('worker.js')

var gamesView = new GamesView()
games.filter(function(game) {
  return game.systemShortName === 'SNES' && game.releaseCoverFront && game.releaseDescription
}).forEach(function(game) {
  var view = new GameView()
  view.game = game
  gamesView.appendChild(view)
})
document.body.appendChild(view)
