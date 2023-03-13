const two = document.getElementById('two')
const one = document.getElementById('one')
const three = document.getElementById('three')
const button = document.getElementById('button')
const audio = document.getElementById('audio')
const enter = document.getElementById('enter')

two.addEventListener('mouseenter', function(){
    two.classList.add('twoplus')
    one.classList.add('gray')
    three.classList.add('gray')
    button.classList.add('show')
})

button.addEventListener('click', function(){
    audio.play()
})

two.addEventListener('mouseleave', function(){
    two.classList.remove('twoplus')
    one.classList.remove('gray')
    three.classList.remove('gray')
    button.classList.remove('show')
})