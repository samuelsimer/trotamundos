let pagina = 1;

añadirListener();
renderRutas();

let map = L.map('iframeRuta').setView([42.6000300, -5.570320], 8);
L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=156c77879c664ca0b9d88fe8f6904445', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.orgcopyright" > OpenStreetMap</a>'
}).addTo(map);

// Añadir Listener
function añadirListener() {
    //Añadir las funciones de navegación
    document.querySelector('#anteriorRuta').addEventListener('click', function () {
        pagina != 1 ? pagina-- : "";
        renderRutas();
    });
    document.querySelector('#siguienteRuta').addEventListener('click', function () {
        pagina != 3 ? pagina++ : "";
        renderRutas();
    });
}

// Renderizar la página, esta función se llamará al ejecutar el script
// y después de cada vez que se cambie la página
function renderRutas(filtros = 0) {

    let url = "http://localhost:5000/api/route";

    if(filtros != 0){
        url += '?min_dist=' + filtros[0] + '&max_dist=' + filtros[1];
    }

    

    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let rutasNuevas = json.filter((item, index) => {
                return (index == (pagina - 1)) || (index == pagina);
            });
            let rutasNuevasNodos = rutasNuevas.map(crearRuta);

            let rutasDestacadas = document.getElementById('rutasRecomendadas');
            rutasDestacadas.innerHTML = '';
            rutasDestacadas.append(...rutasNuevasNodos);

            //Añadimos los listener a los botones
            let eventoRutas = document.querySelectorAll('.ruta');
            eventoRutas.forEach((btn) => {
                btn.addEventListener('click', cambiarMapa);
            })

        })
        .catch((error) => { console.log(error); });



}

// Recoger los datos de la ruta y devolver un nodo HTML con la estructura de la ruta
function crearRuta({ id, route_name, start_lat, start_lon, desc, distance }) {
    // Crear el div base de la ruta
    let divRuta = document.createElement('div');
    divRuta.classList.add('ruta');

    // Añadir los datos
    divRuta.setAttribute('idRuta', id);
    divRuta.dataset.lat =  start_lat;
    divRuta.dataset.lon = start_lon;
    divRuta.innerHTML = `
        <div class="portadaRuta"><img src="../imgs/parqueBernesgaPortada.jpg" alt="portada"></div>
        <div class="datosRuta">
            <div class="nombreRuta"><h1>${route_name}</h1></div>` +
        // <div class="descripcionRuta">${ desc.substr(0,100) }...</div>
        `</div>
    `;

    L.marker([start_lat, start_lon], {
        title: "Inicio Ruta",
        draggable:true,
        opacity: 0.75
        }).bindPopup("<i>Inicio Ruta</i>")
        .addTo(map);

    return divRuta;
}





function cambiarMapa(e) {

    let lat = parseFloat(e.target.dataset.lat);
    let lon = parseFloat(e.target.dataset.lon);

    console.log(map);
    console.log('*******************');

    console.log(parseFloat(lat));

    
    

    L.marker([lat, lon], {
        title: "Inicio Ruta",
        draggable:true,
        opacity: 0.75
        }).bindPopup("<i>Inicio Ruta</i>")
        .addTo(map);
}

// // Recoger los datos de la ruta y devolver un nodo HTML con la estructura de la ruta
// function crearRuta( {id, nombre, descripcion, distancia, iframe, portada} ) {
//     // Crear el div base de la ruta
//     let divRuta = document.createElement('div');
//     divRuta.classList.add('ruta');

//     // Añadir los datos
//     divRuta.setAttribute('idRuta', id);
//     divRuta.setAttribute('iframe', iframe);
//     divRuta.innerHTML = `
//         <div class="portadaRuta"><img src="${ portada }" alt="portada"></div>
//         <div class="datosRuta">
//             <div class="nombreRuta"><h1>${ nombre }</h1></div>`+
//             // <div class="descripcionRuta">${ descripcion.substr(0,100) }...</div>
//         `</div>
//     `;

//     return divRuta;
// }

// function cambiarIframe(e) {
//     let nuevoIframe = e.target.getAttribute('iframe');
//     document.getElementById('iframeRuta').innerHTML = nuevoIframe;
// }

