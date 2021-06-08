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

/*--Instanciar objetos--*/


const comenzarJuego = () =>{
    const inicio = $('.container-inicio');
    const juego = $('.container-juego');
    const autor = $('#footer');
    let validacionNombre = validarNombre();



    if(validacionNombre){
        $('#puntosJugador').text('0');
        $('#puntosIA').text('0');
        console.log($('#nombreJugador').val());

        $('#txtNombreJugador').text($('#nombreJugador').val());

        inicio.css({
            visibility: 'hidden',
            display: 'none'
        });
        juego.css({
            visibility: 'visible',
            display: 'block',
            filter: 'blur(0px)'
        });

        footer.style.display = 'none';
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
    $('#txtNombreJugadorFinal').text($('#nombreJugador').val());
    $('#mostrarPuntosJugador').text(puntos['jugador']);
    $('#mostrarPuntosIA').text(puntos['IA']);

    anuncio.css('display', 'block');
    if(puntos['jugador'] > puntos['IA']){
        colorAnuncio = 'rgb(0, 255, 0)';
        anuncio.text('GANASTE!!');
        console.log("Ganador")
    } else if(puntos['jugador'] < puntos['IA']){
        colorAnuncio = 'rgb(255, 0, 0)';
        anuncio.text('INTENTA OTRA VEZ');
        console.log("Ganador")
    } else {
        colorAnuncio = 'rgb(0, 0, 0)';
        anuncio.text('EMPATE');
    }
    anuncio.css({
        color: `${colorAnuncio}`
    });

    $('.container-juego').css('filter', 'blur(5px)');
    $('.container-final-juego').css({
        opacity: '1',
        zIndex: '1000',
        transition: 'all 0.7s'
    });
}

const volverPantallaMain = () =>{
    $('.container-juego').css({
        display: 'none',
        visibility: 'hidden'
    });
    $('.container-final-juego').css({
        opacity: '0',
        zIndex: '-100'
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
            alert("El nombre es muy largo. Debe tener 14 o menos caracteres");
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