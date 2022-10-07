const gameArea = document.querySelector('main')
const levelText = document.querySelector('#level')

initRound()

function initRound() {
    gameArea.removeEventListener('mouseover', boundarySet)
    gameArea.innerHTML = ''

    const amountOfPaths = 5
    let offSetX = 0
    let offSetY = 0

    const mazeStart = new MazePathComponent()
    mazeStart.setAttribute('coord-x', 0)
    mazeStart.setAttribute('coord-y', 0)
    mazeStart.setAttribute('class', 'start')

    mazeStart.addEventListener('click', (e) => {
        console.log('started!')
        gameArea.addEventListener('mouseover', boundarySet)
        mazeGoal.addEventListener('mouseover', goalDetection)
    })
    
    gameArea.appendChild(mazeStart)

    for (let i = 0; i < amountOfPaths; i++) {
        const mazePath = new MazePathComponent()
        const innerMazePath = mazePath.shadowRoot.lastElementChild

        mazePath.setAttribute('coord-x', offSetX)
        mazePath.setAttribute('coord-y', offSetY)
        mazePath.setAttribute('class', 'path')

        gameArea.appendChild(mazePath)
        offSetX += innerMazePath.clientWidth + getRandomArbitrary(-innerMazePath.clientWidth,0)
        offSetY += innerMazePath.clientHeight + getRandomArbitrary(-innerMazePath.clientHeight,0)
    }

    const mazeGoal = new MazePathComponent()
    mazeGoal.setAttribute('coord-x', offSetX)
    mazeGoal.setAttribute('coord-y', offSetY)
    mazeGoal.setAttribute('class', 'goal')

    gameArea.appendChild(mazeGoal)
}

function boundarySet(e) {
    if (e.composedPath()[0].localName === 'main') {
        alert('back to hell!')
        location.reload()
    }
}

function goalDetection() {
    levelText.lastChild.textContent = parseInt(levelText.lastChild.textContent) -1
    if (levelText.lastChild.textContent == 0) {
        levelText.innerHTML = 'Heaven! Level: <span>0</span>'
        levelText.style.color = 'goldenrod'
        document.querySelector('body').style.background = 'linear-gradient(45deg, gold, white)'
    }
    initRound()
}