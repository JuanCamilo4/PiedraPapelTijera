//Eventos de los botones
const btnPiedra = document.getElementById('btnPiedra');
btnPiedra.addEventListener('click', function(e) {eleccionJugador(1);});
const btnPapel = document.getElementById('btnPapel');
btnPapel.addEventListener('click', function(e) {eleccionJugador(2);});
const btnTijera = document.getElementById('btnTijera');
btnTijera.addEventListener('click', function(e) {eleccionJugador(3);});
const btnJugar = document.getElementById('btnJugar');
btnJugar.addEventListener('click', function(e) {/*Habilitar juego*/});

const nombreJugador = document.getElementById('nombreJugador');

let opcionesMano = ['Piedra', 'Papel', 'Tijera']; 

let verificadorTurno = false; //Verfica que el jugeador ya dio su turno

let respuestaJugador = 0; //Respuesta que el jugador selecciona
let countJ = 0;//Variable que cuenta cuantas veces gano consecutivamente un jugador;
let countIA = 0;//Variable que cuenta cuantas veces gano consecutivamente la IA;
let seguimientoJugador;
let seguimientoIA;

let puntos = {//Array asociativo para almacenar los puntos de ambas partes
    jugador: 0,
    IA: 0
};

const eleccionJugador = idBoton =>{//0: Piedra, 1: Papel, 2: Tijera
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

const controladorPuntos = (resultadoEncuentro) =>{ //Método para controlar que cada vez que gane tres veces seguidas se le sumaran un punto de más
    if(resultadoEncuentro == 0){//Si es 0 el jugador ganó. Si es 1 el jugador perdió
        seguimientoJugador = true;
        seguimientoIA = false;
        if(seguimientoJugador){
            countJ++;
            countIA = 0;
            if(countJ >= 3){
                puntos['jugador'] = puntos['jugador']+2;
            } else {
                puntos['jugador']++;
            }
        }
        console.log(puntos['jugador']);
    } else if(resultadoEncuentro == 1){
        seguimientoIA = true;
        seguimientoJugador = false;
        if(seguimientoIA){
            countIA++;
            countJ = 0;
            if(countIA >= 3){
                puntos['IA'] = puntos['IA']+2;
            } else {
                puntos['IA']++;
            }
        }
        console.log(puntos['IA']);
    } else {
        countIA = 0;
        countJ = 0;
        console.log("No hay puntos");
    }
}

const juego = () =>{//Método que compara la eleccion de los dos jugadores
    let jugador = opcionesMano[respuestaJugador];
    let IA = eleccionIA();

    console.log(jugador);
    console.log(IA);

    if(jugador == IA){ //0: Piedra, 1: Papel, 2: Tijera
        console.log("empate");
        controladorPuntos(2);
    } else if(jugador == opcionesMano[0] && IA == opcionesMano[2]){
        console.log("Ganador Jugador");
        controladorPuntos(0);
    } else if(jugador == opcionesMano[2] && IA == opcionesMano[1]){
        console.log("Ganador Jugador");
        controladorPuntos(0);
    } else if(jugador == opcionesMano[1] && IA == opcionesMano[0]){
        console.log("Ganador Jugador");
        controladorPuntos(0);
    } else if(IA == opcionesMano[0] && jugador == opcionesMano[2]){
        console.log("Ganador IA");
        controladorPuntos(1);
    } else if(IA == opcionesMano[2] && jugador == opcionesMano[1]){
        console.log("Ganador IA");
        controladorPuntos(1);
    } else if(IA == opcionesMano[1] && jugador == opcionesMano[0]){
        console.log("Ganador IA");
        controladorPuntos(1);
    } else {
        console.log("Error"); 
    }
}