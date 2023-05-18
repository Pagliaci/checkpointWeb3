


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
        spanMensagemNome.innerHTML = ' '
    }
}

function verificarCampoIdade(){
    if(inputIdade.value == ''){
        inputIdade.style.border = '3px solid red'
        spanMensagemIdade.innerHTML = 'Preencha o campo idade, ele é obrigatório'
        spanMensagemIdade.style.color = 'red'
    }else{
        inputIdade.style.border = '3px solid green'
        spanMensagemIdade.innerHTML = ' '
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

function questoes(){
    let nome = prompt('Qual o seu nome?')
    let idade = prompt('Qual a sua idade?')
    let curso = prompt('Qual o curso que você faz?')
    document.querySelector('#frase').innerHTML = `A pessoa se chama ${nome}, tem ${idade} anos e cursa ${curso}.

    
}