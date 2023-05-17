


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



let num1 = Number (document.querySelector('#num1').value)
let num2 = Number (document.querySelector('#num2').value)
let resultado = document.querySelector('#result')


function conta(operacao){

    if (operacao == "som"){
        resultado.innerHTML = num1+num2
    }
    else if (operacao == "sub"){
        resultado.innerHTML = (num1-num2)
    }
    else if (operacao == "div"){
        resultado.innerHTML = (num1/num2)
    }
    else if (operacao == "mul"){
        resultado.innerHTML = (num1*num2)
    }
    
    
}