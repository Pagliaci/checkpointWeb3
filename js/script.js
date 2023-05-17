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




























































































let textoquestao4 = document.querySelector('#texto4')
let titulo = document.querySelector('#titulo')
textoquestao4.addEventListener('mouseenter',ficar_vermelho)
textoquestao4.addEventListener('mouseout',voltar_normal) 

function ficar_vermelho(){
   titulo.style.color = 'red'
}

function voltar_normal(){
    titulo.style.color = 'white'
}