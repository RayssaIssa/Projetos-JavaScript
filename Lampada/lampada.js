const lampada = document.getElementById("lampada");
const interruptor = document.getElementById("interruptor");

function taQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}
function OnOff(){
    if(interruptor.textContent == 'Ligar'){
        lampOn();
    }else{
        lampOff();
    }
}
function lampOn(){
    if(!taQuebrada()){
        lampada.src = 'img/ligada.jpg';
        interruptor.textContent = 'Desligar';
    }
}
function lampOff(){
    if(!taQuebrada()){
        lampada.src = 'img/desligada.jpg';
        interruptor.textContent = 'Ligar';
    }
}
function quebrada(){
    lampada.src = 'img/quebrada.jpg';
}

interruptor.addEventListener('click', OnOff);

lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);

lampada.addEventListener('dblclick', quebrada);
