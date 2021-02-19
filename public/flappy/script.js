document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100

    function startGame(){
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }

    let gameTimerId = setInterval(startGame, 20)
    
    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
})