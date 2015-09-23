import games from 'openvgdb'
import GamesView from './games-view'

var view = new GamesView()
view.games = games.slice(0, 10)
document.body.appendChild(view)
