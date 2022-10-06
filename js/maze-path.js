let mazePathTemplate = document.createElement('template')
mazePathTemplate.innerHTML = 
`
<style>
</style>
<p>hello world</p>
`

class MazePathComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(mazePathTemplate.content.cloneNode(true))
    }

    connectedCallback() {
        this.coordX = this.getAttribute('coord-x')
        this.coordY = this.getAttribute('coord-y')
        this.shadowRoot.querySelector('style').innerText =
        `
        p {
            position: absolute;
            top: ${this.coordY}px;
            left: ${this.coordX}px;
        }
        `
    }
}

window.customElements.define('maze-path', MazePathComponent)