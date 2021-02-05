const btnJugar = document.getElementById('btnJugar');
btnJugar.addEventListener('click', function(e) {comenzarJuego();});

const comenzarJuego = () =>{3
    const inicio = document.querySelector('.container-inicio');
    const juego = document.querySelector('.container-juego');
    const autor = document.getElementById('footer');
    let validacionNombre = validarNombre();

    if(validacionNombre){
        document.getElementById('txtNombreJugador').innerHTML = document.getElementById('nombreJugador').value;
        inicio.style.display = 'none';
        footer.style.display = 'none';
        juego.style.display = 'block';
    } else {
        console.log("Seleccione un nombre correcto");
    }
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