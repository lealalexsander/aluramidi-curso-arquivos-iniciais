function tocaSom(idElementAudio) {
    const elemento = document.querySelector(idElementAudio);  

    if (elemento == null){
        alert("Elemento não encontrado!!");
    } else if (elemento.localName === 'audio') {
        elemento.play();
    }else {
        alert("Elemento não é audio!!");
    }
}   

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }         
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}