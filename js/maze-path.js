let mazePathTemplate = document.createElement('template')
mazePathTemplate.innerHTML = 
`
<style>
</style>
<div></div>
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
        this.randomWidth = getRandomArbitrary(1,300)
        this.randomHeight = getRandomArbitrary(1,300)
        this.shadowRoot.querySelector('style').innerText =
        `
        div {
            position: absolute;
            background: red;
            width: ${this.randomWidth}px;
            height: ${this.randomHeight}px;
            top: ${this.coordY}px;
            left: ${this.coordX}px;
        }
        `
    }
}

window.customElements.define('maze-path', MazePathComponent)