
function operacao(tipo) {
    let num1 = Number (document.getElementById('num1'))
    let num2 = Number (document.getElementById('num2'))
    let result = document.getElementById('resultado')
    if (tipo =='som'){
        result.innerHTML = num1+num2
    }
    else if (tipo =='sub'){
        result.innerHTML = num1-num2
    }
    
    else if (tipo =='div'){
        result.innerHTML = num1/num2
    }
    
    else if (tipo =='mul'){
        result.innerHTML = num1*num2
    }
    
}

function questoes(){
    let nome = prompt('Qual o seu nome?')
    let idade = prompt('Qual a sua idade?')
    let curso = prompt('Qual o curso que você faz?')
    document.getElementById('frase').innerHTML = `A pessoa se chama ${nome}, tem ${idade} anos e cursa ${curso}.`
    
}


function cor(){
    
}









