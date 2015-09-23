import games from 'openvgdb'
import GamesView from './games-view'

if (navigator.serviceWorker)
  navigator.serviceWorker.register('worker.js')

var view = new GamesView()
games.filter(function(game) {
  return game.systemShortName === 'SNES' && game.releaseCoverFront && game.releaseDescription
}).forEach(function(game) {
  view.addGame(game)
})
document.body.appendChild(view)
