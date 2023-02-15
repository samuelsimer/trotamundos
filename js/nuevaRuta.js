document.getElementById('enviar').addEventListener('click', enviarArchivo);

function enviarArchivo(e) {
    e.preventDefault();

    // Obtener archivo GPX seleccionado por el usuario
    const inputFile = document.getElementById('gpxfile');
    const gpxfile = inputFile.files[0];

    console.log(gpxfile);

    // Crear objeto FormData para enviar archivo GPX
    const datosfile
 = {
        file: gpx
    }

    // Enviar archivo GPX a la API utilizando fetch
    fetch('http://localhost/trotamundos/api/rutas/nuevaRuta.php', {
        method: 'POST',
        body: datos,
        headers: {
            'Content-Type': 'application/gpx+xml',
          },
    })
    .then(response => {
        if (response.ok) {
            // Procesar respuesta de la API
            return response.json();
        } else {
            throw new Error('Error en la respuesta de la API');
        }
    })
    .then(data => {
        // Mostrar datos recibidos de la API
        console.log('Datos recibidos de la API:');
        console.log(data);
    })
    .catch(error => {
        // Mostrar error en caso de fallo
        console.error('Error al enviar archivo GPX:', error);
    });
}