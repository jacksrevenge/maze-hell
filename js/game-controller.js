const gameArea = document.querySelector('main')

gameArea.addEventListener('mousemove', (e) => {
    const mazePath = document.createElement('maze-path')

    mazePath.setAttribute('coord-x', e.pageX)
    mazePath.setAttribute('coord-y', e.pageY)

    gameArea.appendChild(mazePath)
})