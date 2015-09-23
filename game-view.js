import querystring from 'querystring'

export default document.registerElement('x-game', class extends HTMLElement {
  attachedCallback() {
    this.classList.add('card')
    this.setAttribute('href', 'play?' + querystring.stringify(this.game))
    this.addEventListener('click', function() {
      location.href = this.getAttribute('href')
    }.bind(this))

    var cover = document.createElement('img')
    cover.classList.add('cover')
    cover.setAttribute('src', this.game.releaseCoverFront)
    this.appendChild(cover)

    var title = document.createElement('span')
    title.classList.add('title')
    title.textContent = this.game.releaseTitleName
    this.appendChild(title)
  }
})
