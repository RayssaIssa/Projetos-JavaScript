const lampada = document.getElementById("lampada");

const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");

function taQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}
function lampOn(){
    if(!taQuebrada()){
        lampada.src = 'img/ligada.jpg';
    }
}
function lampOff(){
    if(!taQuebrada()){
        lampada.src = 'img/desligada.jpg';
    }
}
function quebrada(){
    lampada.src = 'img/quebrada.jpg';
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);

lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);

lampada.addEventListener('dblclick', quebrada);