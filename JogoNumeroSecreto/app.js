let numSorteados = [];
let chute, tentativa = 1, numMax = 100;
let numSecreto = gerarNumAleatorio();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function msgInicial(){
    exibirTexto('h1', "Jogo do número secreto");
    exibirTexto('p', `Escolha um número entre 1 e ${numMax}`);
}

msgInicial();

function verificarChute(){
    chute = document.querySelector('input').value;

    if(chute == numSecreto){
        exibirTexto('h1', "Acertou!");
        let tent = tentativa > 1 ? "tentativas" : "tentativa";
        exibirTexto('p', `Você descobriu o número secreto ${chute} com ${tentativa} ${tent}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            exibirTexto('p', `O número é menor que ${chute}`);
        }else{
            exibirTexto('p', `O número é maior que ${chute}`);
        }
        tentativa++;
        limparcampo();
    }
}

function gerarNumAleatorio(){
    let numEscolhido =  parseInt(Math.random() * numMax + 1);
    let quantElementosNaLista = numSorteados.length;

    if(quantElementosNaLista == numMax){
        numSorteados = [];
    }

    if(numSorteados.includes(numEscolhido)){
        return gerarNumAleatorio();
    }else{
        numSorteados.push(numEscolhido);
        console.log(numSorteados);
        return numEscolhido;
    }
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numSecreto = gerarNumAleatorio();
    limparcampo();
    tentativa = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
