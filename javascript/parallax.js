const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const pilus = document.getElementById('pilus')


window.addEventListener('scroll', function(){
    let value = window.scrollY;

    b1.style.left = value * -0.30 + 'px'
    b1.style.bottom = value * -0.40 + 'px'
    
    b2.style.bottom = value * -0.45 + 'px'
    b2.style.right = value * -0.25 + 'px'

})