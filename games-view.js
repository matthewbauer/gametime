import GameView from './game-view'
import 'games-view.css!'

export default document.registerElement('x-games', class extends HTMLElement {
  attachedCallback() {
    this.classList.add('cards')
    for (var game in this.games) {
      var view = new GameView()
      view.game = this.games[game]
      this.appendChild(view)
    }
  }
})
