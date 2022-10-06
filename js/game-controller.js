const gameArea = document.querySelector('main')

gameArea.addEventListener('mouseover', (e) => {
    if (e.composedPath()[0].localName === 'main') {
        alert('back to hell!')
        location.reload()
    }
})

function initRound(e) {
    const amountOfPaths = 5
    let offSetX = 0
    let offSetY = 0

    for (let i = 0; i < amountOfPaths; i++) {
        const mazePath = new MazePathComponent()
        const innerMazePath = mazePath.shadowRoot.lastElementChild

        mazePath.setAttribute('coord-x', offSetX)
        mazePath.setAttribute('coord-y', offSetY)

        gameArea.appendChild(mazePath)
        offSetX += innerMazePath.clientWidth + getRandomArbitrary(-innerMazePath.clientWidth,0)
        offSetY += innerMazePath.clientHeight + getRandomArbitrary(-innerMazePath.clientHeight,0)
    }
}

initRound()