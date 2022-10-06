const gameArea = document.querySelector('main')

initRound()

gameArea.addEventListener('mouseover', (e) => {
    if (e.composedPath()[0].localName === 'main') {
        alert('back to hell!')
        location.reload()
    }
})

function initRound(carriedEventX = 0, carriedEventY = 0) {
    while (gameArea.childNodes.length > 1) {
        gameArea.removeChild(gameArea.firstChild);
    }
    console.log(gameArea.lastChild.class)

    const amountOfPaths = 5
    let offSetX = 0
    let offSetY = 0

    for (let i = 0; i < amountOfPaths; i++) {
        const mazePath = new MazePathComponent()
        const innerMazePath = mazePath.shadowRoot.lastElementChild

        mazePath.setAttribute('coord-x', carriedEventX + offSetX)
        mazePath.setAttribute('coord-y', carriedEventY + offSetY)
        mazePath.setAttribute('class', 'path')

        gameArea.appendChild(mazePath)
        offSetX += innerMazePath.clientWidth + getRandomArbitrary(-innerMazePath.clientWidth,0)
        offSetY += innerMazePath.clientHeight + getRandomArbitrary(-innerMazePath.clientHeight,0)
    }
    const mazeGoal = new MazePathComponent()
    mazeGoal.setAttribute('coord-x', carriedEventX + offSetX)
    mazeGoal.setAttribute('coord-y', carriedEventY + offSetY)
    mazeGoal.setAttribute('class', 'goal')

    mazeGoal.addEventListener('mouseover', (e) => {
        console.log(e.pageX)
        initRound(e.pageX, e.pageY)
    })

    gameArea.appendChild(mazeGoal)
    console.log(document.querySelector('body').scrollHeight)
    gameArea.style.height = `${gameArea.scrollHeight}px`
    gameArea.style.widht = `100%`
    console.log(gameArea.style.height)
}