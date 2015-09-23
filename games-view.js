import GameView from './game-view'
import 'games-view.css!'

export default document.registerElement('x-games', class extends HTMLElement {
  attachedCallback() {
    this.classList.add('cards')
  }
  addGame(game) {
    var view = new GameView()
    view.game = game
    this.appendChild(view)
  }
})
