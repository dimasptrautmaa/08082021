const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const pilus = document.getElementById('pilus')
const love = document.getElementById('love')
const love2 = document.getElementById('love2')


window.addEventListener('scroll', function(){
    let value = window.scrollY;

    b1.style.left = value * -0.30 + 'px'
    b1.style.bottom = value * -0.40 + 'px'
    
    b2.style.bottom = value * -0.45 + 'px'
    b2.style.right = value * -0.25 + 'px'

    love.style.paddingTop = value * 0.5 + 'px'
    love.style.rotate = value * 0.01 + 'deg'

    love2.style.paddingTop = value * 0.2 + 'px'
    love2.style.paddingLeft = value * 0.15 + 'px'
    love2.style.rotate = value * 0.01 + 'deg'
    love2.style.transformOrigin = 'left'
})