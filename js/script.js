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

let inputNome = document.querySelector('#nome')
let spanMensagemNome = document.querySelector('#texto-inputNome')
let inputIdade = document.querySelector('#idade')
let spanMensagemIdade = document.querySelector('#texto-inputIdade')
let inputEmail = document.querySelector('#email')
let spanMensagemEmail = document.querySelector('#texto-inputEmail')

inputNome.addEventListener('blur', verificarNome)
inputIdade.addEventListener('blur',verificarCampoIdade)
inputNome.addEventListener('blur', verificarNome)
inputEmail.addEventListener('blur', verificarCampoEmail)




function verificarNome(){
    if(inputNome.value.indexOf(' ') === -1 && inputNome.value == ''){
        inputNome.style.border = '3px solid red'
        spanMensagemNome.innerHTML = 'Preencha o campo nome, ele é obrigatório'
        spanMensagemNome.style.color = 'red'
    }else if(inputNome.value.indexOf(' ') === -1 && inputNome.value != ''){
        inputNome.style.border = '3px solid red'
        spanMensagemNome.innerHTML = 'Preencha o nome completo.'
        spanMensagemNome.style.color = 'red'
        
    }else{
        inputNome.style.border = '3px solid green'
    }
}

function verificarCampoIdade(){
    if(inputIdade.value == ''){
        inputIdade.style.border = '3px solid red'
        spanMensagemIdade.innerHTML = 'Preencha o campo idade, ele é obrigatório'
        spanMensagemIdade.style.color = 'red'
    }else{
        inputIdade.style.border = '3px solid green'
    }
}

function verificarCampoEmail(){
    if(inputEmail.value.indexOf('@') == -1  || inputEmail.value.indexOf('.') == -1){
        inputEmail.style.border = '3px solid red'
        spanMensagemEmail.innerHTML = 'Inserir um e-mail válido.'
        spanMensagemEmail.style.color = 'red'
    }else{
        inputEmail.style.border = '1px solid gray'
        spanMensagemEmail.innerHTML = ' '
        spanMensagemEmail.style.color = ' '
    }
}