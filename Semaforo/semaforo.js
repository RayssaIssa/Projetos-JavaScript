const semaforo = document.getElementById('semaforo');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const auto = document.getElementById('auto');
let corIndex = 0;
let color;

function vermelho(){
    semaforo.src = 'img/vermelho.png';
}
function amarelo(){
    semaforo.src = 'img/amarelo.png';
}
function verde(){
    semaforo.src = 'img/verde.png';
}

function nextIndex(){
    if(corIndex < 2){
        corIndex++;
    }else{
        corIndex = 0;
    }
}
function mudarCores(){
    const cores = ['img/vermelho.png', 'img/amarelo.png', 'img/verde.png'];
    const color = cores[corIndex];
    semaforo.src = [color];
    nextIndex();
}
function automatico(){
    setInterval(mudarCores, 5000);
}

red.addEventListener('click', vermelho);
yellow.addEventListener('click', amarelo);
green.addEventListener('click', verde);
auto.addEventListener('click', automatico);