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

function next() {
  if (document.activeElement.nextSibling)
    document.activeElement.nextSibling.focus()
}

function prev() {
  if (document.activeElement.previousSibling)
    document.activeElement.previousSibling.focus()
}

setInterval(function() {
  var gamepads = navigator.getGamepads()
  for (var g in gamepads) {
    if (gamepads[g] && g !== 'length' && g !== 'item') {
      var gamepad = gamepads[g]
      if (document.activeElement === document.body) {
        document.getElementsByClassName('card')[0].focus()
      } else {
        if (gamepad.buttons[14].pressed && document.activeElement.previousSibling)
          prev()
        if (gamepad.buttons[15].pressed && document.activeElement.nextSibling)
          next()
        if (gamepad.buttons[16].pressed)
          document.activeElement.click()
        var cardsPerRow = Math.floor(document.body.clientWidth / document.activeElement.offsetWidth) - 1
        if (gamepad.buttons[12].pressed)
          for (var i = 0; i < cardsPerRow; i++)
            prev()
        if (gamepad.buttons[13].pressed)
          for (var i = 0; i < cardsPerRow; i++)
            next()
      }
    }
  }
}, 16)
