let pagina = 1;

añadirListener();
renderRutas();

// Renderiza la página, esta función se llamará al ejecutar el script
// y después de cada vez que se cambie la página
function renderRutas() {
    let rutasNuevas = rutas.filter( (item, index) => {
            return (index == (pagina-1)) || (index == pagina);        
        });
    let rutasNuevasNodos = rutasNuevas.map( crearRuta );

    let rutasDestacadas = document.getElementById('rutasRecomendadas');
    rutasDestacadas.innerHTML = '';
    rutasDestacadas.append(...rutasNuevasNodos);

    //Añadimos los listener a los botones
    let buttons = document.querySelectorAll('.ruta');
    buttons.forEach( (btn) => {
        btn.addEventListener( 'mouseenter', cambiarIframe );
    } )

}

function añadirListener(){
    //Añadimos las funciones de navegación
    document.querySelector('#anteriorRuta').addEventListener('click', function(){
        pagina!=1 ? pagina-- : "";
        renderRutas();
    } );
    document.querySelector('#siguienteRuta').addEventListener('click', function(){
        pagina!=3 ? pagina++ : "";
        renderRutas();
    } );
}

// Recoge los datos de la ruta y devuelve un nodo HTML con la estructura de la ruta
function crearRuta( {id, nombre, descripcion, distancia, iframe, portada} ) {
    // Creamos el div base de la ruta
    let divRuta = document.createElement('div');
    divRuta.classList.add('ruta');
    
    // Añadimos los datos
    divRuta.setAttribute('idRuta', id);
    divRuta.setAttribute('iframe', iframe);
    divRuta.innerHTML = `
        <div class="portadaRuta"><img src="${ portada }" alt="portada"></div>
        <div class="datosRuta">
            <div class="nombreRuta"><h1>${ nombre }</h1></div>`+
            // <div class="descripcionRuta">${ descripcion.substr(0,100) }...</div>
        `</div>
    `;

    return divRuta;
}

function cambiarIframe(e) {
    let nuevoIframe = e.target.getAttribute('iframe');
    document.getElementById('iframeRuta').innerHTML = nuevoIframe;
}

