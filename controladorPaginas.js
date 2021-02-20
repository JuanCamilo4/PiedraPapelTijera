$(document).ready(function() {
    $('#btnJugar').click(function (e) { 
        comenzarJuego();
    }); 
    $('#finalizarJuego').click(function (e) { 
        finalizarJuego();
    });
    $('.btn-volver').click(function (e) { 
        volverPantallaMain();
    }); 
});

const comenzarJuego = () =>{
    const inicio = document.querySelector('.container-inicio');
    const juego = document.querySelector('.container-juego');
    const autor = document.getElementById('footer');
    let validacionNombre = validarNombre();

    if(validacionNombre){
        $('#puntosJugador').text('0');
        $('#puntosIA').text('0');

        document.querySelector('.participante').innerHTML = document.getElementById('nombreJugador').value;
        inicio.style.visibility = 'hidden';
        inicio.style.display = 'none';
        
        footer.style.display = 'none';
        juego.style.visibility = 'visible';
        juego.style.display = 'block';
        juego.style.filter = 'blur(0px)';
        $('#estadoJuego').val(true);
    } else {
        console.log("Seleccione un nombre correcto");
    }
}
const finalizarJuego = () =>{
    let puntos = {
        jugador: 0,
        IA: 0
    }
    let colorAnuncio = 'rgb(0, 0, 0)';
    const anuncio = $('.anuncio-ganador');

    puntos['jugador'] = $('#puntosJugador').text();
    puntos['IA'] = $('#puntosIA').text();
    $('#txtNombreJugadorFinal').text(document.getElementById('nombreJugador').value);
    $('#mostrarPuntosJugador').text(puntos['jugador']);
    $('#mostrarPuntosIA').text(puntos['IA']);

    anuncio.css('display', 'block');
    if(puntos['jugador'] > puntos['IA']){
        colorAnuncio = 'rgb(0, 255, 0)';
        anuncio.text('GANASTE!!');
    } else if(puntos['jugador'] < puntos['IA']){
        colorAnuncio = 'rgb(255, 0, 0)';
        anuncio.text('INTENTA OTRA VEZ');
    } else {
        colorAnuncio = 'rgb(0, 0, 0)';
        anuncio.text('EMPATE');
    }
    anuncio.css({
        color: `${colorAnuncio}`
    });

    $('.container-juego').css('filter', 'blur(5px)');
    $('.container-final-juego').css('z-index', '10000');
    $('.container-final-juego').css({
        display: 'block', 
        visibility: 'visible',
        position: 'absolute'
    });
}

const volverPantallaMain = () =>{
    $('.container-juego').css({
        display: 'none',
        visibility: 'hidden'
    });
    $('.container-final-juego').css({
        display: 'none',
        visibility: 'hidden'
    });
    $('.container-inicio').css({
        display: 'block',
        visibility: 'visible'
    });
    $(footer).css({
       display: 'block'
    });
}

const validarNombre = () =>{
    const nombre = document.getElementById('nombreJugador').value;
    let verificadorNombre = false; //Variable para ver que el nombre este bien

    if(nombre == null || nombre == ""){
        console.log("El campo está vacio");
        verificadorNombre = false;
    } else {
        if(nombre.length <= 14){
            verificadorNombre = true;
        } else {
            console.log("El nombre es muy largo");
            verificadorNombre = false;
        }
    }
    return verificadorNombre;
}

/*const test = function(){//Método con transition pero hay fallas en layout
    const contenedor = document.querySelector('.container-inicio');
    contenedor.style.transition = 'all 0.2s';
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
    document.querySelector('.container-juego').style.visibility = 'visible';
} */