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
        this.randomWidth = getRandomArbitrary(10,200)
        this.randomHeight = getRandomArbitrary(10,200)
        switch (this.className) {
            case 'goal':
                this.shadowRoot.querySelector('style').innerText =
                `
                div {
                    position: absolute;
                    background: yellow;
                    width: ${this.randomWidth}px;
                    height: ${this.randomHeight}px;
                    top: ${this.coordY}px;
                    left: ${this.coordX}px;
                }
                `
                break
            case 'start':
                this.shadowRoot.querySelector('style').innerText =
                `
                div {
                    position: absolute;
                    background: green;
                    z-index: 10;
                    width: ${this.randomWidth}px;
                    height: ${this.randomHeight}px;
                    top: ${this.coordY}px;
                    left: ${this.coordX}px;
                    cursor: pointer;
                }
                `
                break
            default:
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
                break
        }
    }
    
    disconnectedCallback() {
        this.removeEventListener('click', boundarySet)
        this.removeEventListener('mouseover', goalDetection)
    }
}

window.customElements.define('maze-path', MazePathComponent)