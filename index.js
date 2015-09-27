import games from 'openvgdb-snes'
import './games-view.css!'
import querystring from 'querystring'

document.body.classList.add('cards')
games.filter(function(game) {
  return game.releaseCoverFront && game.releaseDescription && (game.regionName === 'USA' || game.regionName === 'World')
}).forEach(function(game) {
  var view = document.createElement('a')

  view.classList.add('card')
  view.setAttribute('href', 'play?' + querystring.stringify(game))

  var cover = document.createElement('img')
  cover.classList.add('cover')
  cover.setAttribute('src', game.releaseCoverFront)
  view.appendChild(cover)

  var title = document.createElement('span')
  title.classList.add('title')
  title.textContent = game.releaseTitleName
  view.appendChild(title)

  document.body.appendChild(view)
})
