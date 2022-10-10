const gameArea = document.querySelector('main')
const levelText = document.querySelector('#level')
let amountOfPaths = 5

initRound()

function initRound() {
    gameArea.removeEventListener('mouseover', boundarySet)
    gameArea.innerHTML = ''

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
    const step = 1
    levelText.lastChild.textContent = parseInt(levelText.lastChild.textContent) -1
    switch (levelText.lastChild.textContent) {
        case '600':
            amountOfPaths += step
            document.querySelector('body').style.background = 'linear-gradient(45deg, darkred, black)'
            break
        case '500':
            amountOfPaths += step
            document.querySelector('body').style.background = 'linear-gradient(45deg, firebrick, black)'
            break
        case '400':
            amountOfPaths += step
            document.querySelector('body').style.background = 'linear-gradient(45deg, crimson, black)'
            break
        case '300':
            amountOfPaths += step
            document.querySelector('body').style.background = 'linear-gradient(45deg, tomato, black)'
            break
        case '200':
                amountOfPaths += step
                document.querySelector('body').style.background = 'linear-gradient(45deg, indianred, black)'
                break
        case '100':
                    amountOfPaths += step
                    document.querySelector('body').style.background = 'linear-gradient(45deg, salmon, black)'
            break
        case '87':
            levelText.innerHTML = 'Heaven! Level: <span>0</span>'
            levelText.style.color = 'goldenrod'
            document.querySelector('body').style.background = 'linear-gradient(45deg, gold, white)'
            break
    }
    initRound()
}