let mazePathTemplate = document.createElement('template')
mazePathTemplate.innerHTML = 
`
<p>hello world</p>
`

class MazePathComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(mazePathTemplate.content.cloneNode(true))
    }
}

window.customElements.define('maze-path', MazePathComponent)