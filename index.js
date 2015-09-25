import games from 'openvgdb-snes'
import GamesView from './games-view'

var view = new GamesView()
games.filter(function(game) {
  return game.systemShortName === 'SNES' && game.releaseCoverFront && game.releaseDescription
}).forEach(function(game) {
  view.addGame(game)
})
document.body.appendChild(view)
