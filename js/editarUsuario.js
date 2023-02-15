let inputs = document.querySelectorAll('input');
let idUsuario = localStorage.getItem('id')
let token = localStorage.getItem('token')

/* datosUsuario = {
   fullname: datos.get('nombre'),
   username: datos.get('nUsuario'),
   email: datos.get('email'),
   pass: datos.get('contraseña'),
   height: datos.get('estatura'),
   weight: datos.get('peso'),
   birthday: datos.get('fechaNac'),
   activities: actividades
 };*/

let url = "http://localhost:5000/api/user/?id=" + idUsuario;
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
})
    .then((response) => {
        console.log(response.status);
        return response.json();
    })
    .then((json) => {

        //console.log(json.id)
        let token = json.token;

        document.querySelector('.nombre').value = json.fullname
        document.querySelector('.nUsuario').value = json.username
        document.querySelector('.email').value = json.email
        document.querySelector('.contraseña').value = json.pass
        document.querySelector('.estatura').value = json.height
        document.querySelector('.peso').value = json.weight
        let cumpleaños = json.birthday.split('/');
        console.log(json.birthday);
        document.querySelector('.fechaNac').value = cumpleaños[2] + '-' + cumpleaños[1] + '-' + cumpleaños[0];
    });

document.querySelector("#registro").addEventListener('submit', loadUser);

function loadUser(e) {
    e.preventDefault();

    let datos = new FormData(e.target);

    //   let posiblesActividades = ['cbCaminar', 'cbCorrer', 'cbBicicleta', 'cbMoto', 'cbCohce'];

    //   let actividades = ['ninguna'];

    //   actividades = posiblesActividades
    //     .filter(($item) => datos.get($item))
    //     .map(($item) => datos.get($item));


    datosUsuario = {
        id: idUsuario,
        fullname: datos.get('nombre'),
        username: datos.get('nUsuario'),
        email: datos.get('email'),
        pass: datos.get('contraseña'),
        height: datos.get('estatura'),
        weight: datos.get('peso'),
        // birthday: datos.get('fechaNac'),
        // activities: actividades
    };

    // let url = "http://localhost:5000/api/user/?id=" + idUsuario;
    let url = "http://localhost/trotamundos/api/usuarios/register.php";
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(datosUsuario)
    })
        .then((response) => {
            console.log(response.status)
        });
}

