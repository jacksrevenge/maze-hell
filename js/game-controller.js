const game_area = document.querySelector('main')

// För testing, visar muskoordinater i konsolen
game_area.addEventListener('mousemove', (e) => {
    console.log(e.screenX)
    console.log(e.screenY)
})