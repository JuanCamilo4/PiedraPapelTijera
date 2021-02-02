//Eventos de los botones
const btnPiedra = document.getElementById('btnPiedra');
btnPiedra.addEventListener('click', function(e) {eleccionJugador(1);});
const btnPapel = document.getElementById('btnPapel');
btnPapel.addEventListener('click', function(e) {eleccionJugador(2);});
const btnTijera = document.getElementById('btnTijera');
btnTijera.addEventListener('click', function(e) {eleccionJugador(3);});

let opcionesMano = ['Piedra', 'Papel', 'Tijera']; 

let verificadorTurno = false; //Verfica que el jugeador ya dio su turno

let respuestaJugador = 0; //Respuesta que el jugador selecciona

const eleccionJugador = (idBoton) =>{//0: Piedra, 1: Papel, 2: Tijera
    switch(idBoton){
        case 1:
            verificadorTurno = true;
            respuestaJugador = 0;
        break;
        case 2:
            verificadorTurno = true;
            respuestaJugador = 1;
        break;
        case 3:
            verificadorTurno = true;
            respuestaJugador = 2;
        break;
    }

    if(verificadorTurno){
        juego();
        verificadorTurno = false;
    } else {
        verificadorTurno = false;
    }
}

const eleccionIA = () =>{//0: Piedra, 1: Papel, 2: Tijera
    let respuestaIA = Math.floor(Math.random() * 3);

    switch(respuestaIA){
        case 0:
            return opcionesMano[0];
        break;
        case 1:
            return opcionesMano[1];
        break;
        case 2:
            return opcionesMano[2];
        break;
    }
}

const juego = () =>{//Método que compara la eleccion de los dos jugadores
    let jugador = opcionesMano[respuestaJugador];
    let IA = eleccionIA();

    console.log(jugador);
    console.log(IA);

    if(jugador == IA){ //0: Piedra, 1: Papel, 2: Tijera
        console.log("empate");
    } else if(jugador == opcionesMano[0] && IA == opcionesMano[2]){
        console.log("Ganador Jugador");
    } else if(jugador == opcionesMano[2] && IA == opcionesMano[1]){
        console.log("Ganador Jugador");
    } else if(jugador == opcionesMano[1] && IA == opcionesMano[0]){
        console.log("Ganador Jugador");
    } else if(IA == opcionesMano[0] && jugador == opcionesMano[2]){
        console.log("Ganador IA");
    } else if(IA == opcionesMano[2] && jugador == opcionesMano[1]){
        console.log("Ganador IA");
    } else if(IA == opcionesMano[1] && jugador == opcionesMano[0]){
        console.log("Ganador IA");
    } else {
        console.log("Error"); 
    }
}