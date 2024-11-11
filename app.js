let listaDeNumerosSorteados = []
let numeroLimite = 10;
let NumeroAleatorio = NumberRandom();
let tentativas = 1;

function TrocarValores(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto , 'Brazilian Portuguese Female' , {rate:1.2});
}
function msgInicial() {
TrocarValores('h1' , 'Jogo Do Número');
TrocarValores('p' , 'Chute Um Numero ');
}

msgInicial()

function Kick(){
    chute = document.querySelector('input').value;
    console.log(chute == NumeroAleatorio);
   document.querySelector('#reiniciar').removeAttribute('disabled');
    if (chute == NumeroAleatorio) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        TrocarValores('h1' , 'Acertou!!');
        TrocarValores('p' , mensagemTentativas);

    }
    else{
        if (chute > NumeroAleatorio){
        TrocarValores('p' , 'Numero Secreto é Menor');
}
   else{
    TrocarValores('p' , 'Numero Secreto é Maior');
   }
    tentativas++;
    Clean()
}
    }
   


function Clean() {
    chute = document.querySelector('input');
    chute.value = "";
}

function NumberRandom() {
    let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function resetGame(){
    document.querySelector('#reiniciar').setAttribute('disabled', true)
    NumeroAleatorio = NumberRandom();
    Clean();
    tentativas = 1;
    msgInicial()
}