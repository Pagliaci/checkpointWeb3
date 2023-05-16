let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let executar = document.querySelector('#executar')


let lampada = document.querySelector('#lampada')
lampada.addEventListener('mouseover',acender)
lampada.addEventListener('mouseout',apagar)


function acender(){
    lampada.src = 'img/lamp-acesa.jpg'
}

function apagar(){
    lampada.src = 'img/lamp-apagada.jpg'
}