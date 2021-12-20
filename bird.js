const birdElem = document.querySelector('[data-bird]')
const BIRD_SPEED = .5
let timeSinceLastJump = Number.POSITIVE_INFINITY

export function setupBird() { 
    setTop(window.innerHeight / 2)
    document.removeEventListener('keydown', handleJump)
    document.addEventListener('keydown', handleJump)

}

export function updateBird(delta) {
    setTop(getTop() + BIRD_SPEED * delta) 
    console.log(getTop())
}

function setTop(top) {
    birdElem.style.setProperty('--bird-top', top)
}

function getTop() {
    return parseFloat(getComputedStyle(birdElem).getPropertyValue
    ('--bird-top'))
}

function handleJump(e) {
    if (e.code !== 'Space') return

    timeSinceLastJump = 0
}