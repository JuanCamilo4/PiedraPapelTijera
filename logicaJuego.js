//Eventos de los botones
const btnPiedra = document.getElementById('btnPiedra');
btnPiedra.addEventListener('click', function(e) {eleccionJugador(1);});
const btnPapel = document.getElementById('btnPapel');
btnPapel.addEventListener('click', function(e) {eleccionJugador(2);});
const btnTijera = document.getElementById('btnTijera');
btnTijera.addEventListener('click', function(e) {eleccionJugador(3);});

const nombreJugador = document.getElementById('nombreJugador');

let opcionesMano = ['Piedra', 'Papel', 'Tijera']; 

let verificadorTurno = false; //Verfica que el jugador ya dio su turno

let respuestaJugador = 0; //Respuesta que el jugador selecciona
let countJ = 0;//Variable que cuenta cuantas veces gano consecutivamente un jugador;
let countIA = 0;//Variable que cuenta cuantas veces gano consecutivamente la IA;
let seguimientoJugador; //Variable que verifica si el jugador más de 3 veces seguidas
let seguimientoIA;  //Variable que verifica si el jugador más de 3 veces seguidas

let puntos = {//Array asociativo para almacenar los puntos de ambas partes
    jugador: 0,
    IA: 0
};

$('#btnJugar').click(function (e) {  //Funcion para reiniciar elcontador de puntos
    puntos['jugador'] = 0;
    puntos['IA'] = 0;
    countJ = 0;
    countIA = 0;
    seguimientoIA = 0;
    seguimientoJugador = 0;
});


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

const mostrarPuntosMarcador = () =>{
    const marcadorJugador = document.getElementById('puntosJugador');
    const marcadorIA = document.getElementById('puntosIA');

    marcadorJugador.innerHTML = puntos['jugador'];
    marcadorIA.innerHTML = puntos['IA'];
}

const juego = () =>{//Método que compara la eleccion de los dos jugadores
    let jugador = opcionesMano[respuestaJugador];
    let IA = eleccionIA();
    const eleccionContrincante = document.getElementById('eleccionIA');

    console.log(jugador);
    console.log(IA);

    if(jugador == IA){ //0: Piedra, 1: Papel, 2: Tijera
        console.log("empate");
        eleccionContrincante.innerHTML = IA;
        controladorPuntos(2);
        mostrarPuntosMarcador();
    } else if(jugador == opcionesMano[0] && IA == opcionesMano[2]){
        console.log("Ganador Jugador");
        eleccionContrincante.innerHTML = opcionesMano[2];
        controladorPuntos(0);
        mostrarPuntosMarcador();
    } else if(jugador == opcionesMano[2] && IA == opcionesMano[1]){
        console.log("Ganador Jugador");
        eleccionContrincante.innerHTML = opcionesMano[1];
        controladorPuntos(0);
        mostrarPuntosMarcador();
    } else if(jugador == opcionesMano[1] && IA == opcionesMano[0]){
        console.log("Ganador Jugador");
        eleccionContrincante.innerHTML = opcionesMano[0];
        controladorPuntos(0);
        mostrarPuntosMarcador();
    } else if(IA == opcionesMano[0] && jugador == opcionesMano[2]){
        console.log("Ganador IA");
        eleccionContrincante.innerHTML = opcionesMano[0];
        controladorPuntos(1);
        mostrarPuntosMarcador();
    } else if(IA == opcionesMano[2] && jugador == opcionesMano[1]){
        console.log("Ganador IA");
        eleccionContrincante.innerHTML = opcionesMano[2];
        controladorPuntos(1);
        mostrarPuntosMarcador();
    } else if(IA == opcionesMano[1] && jugador == opcionesMano[0]){
        console.log("Ganador IA");
        eleccionContrincante.innerHTML = opcionesMano[1];
        controladorPuntos(1);
        mostrarPuntosMarcador();
    } else {
        console.log("Error"); 
    }
}