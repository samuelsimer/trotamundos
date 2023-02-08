// Evento cambiar pantalla a registro
document.querySelector('#btnRegistrarse').addEventListener('click', function (e) {

  document.querySelector('#btnRegistrarse').parentNode.classList.add('active');
  document.querySelector('#btnEntrar').parentNode.classList.remove('active');

  document.querySelector('#entrar').style.display = 'none';
  document.querySelector('#registrarse').style.display = 'initial';

});

// Evento cambiar pantalla a entrar
document.querySelector('#btnEntrar').addEventListener('click', function (e) {

  document.querySelector('#btnEntrar').parentNode.classList.add('active');
  document.querySelector('#btnRegistrarse').parentNode.classList.remove('active');

  document.querySelector('#registrarse').style.display = 'none';
  document.querySelector('#entrar').style.display = 'initial';

});

// Evento registrar usuario
document.querySelector("#registro").addEventListener('submit', registrarUsuario);


//Funcion registrar usuario
function registrarUsuario(e) {
  e.preventDefault();

  let datos = new FormData(e.target);

  let posiblesActividades = ['cbCaminar', 'cbCorrer', 'cbBicicleta', 'cbMoto', 'cbCohce'];

  let actividades = ['ninguna'];

  actividades = posiblesActividades
    .filter(($item) => datos.get($item))
    .map(($item) => datos.get($item));


  datosUsuario = {
    fullname: datos.get('nombre'),
    username: datos.get('nUsuario'),
    email: datos.get('email'),
    pass: datos.get('contraseña'),
    height: datos.get('estatura'),
    weight: datos.get('peso'),
    birthday: datos.get('fechaNac'),
    activities: actividades
  };

  let url = "http://localhost:5000/api/register/";
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(datosUsuario)
  })
    .then((response) => {
      console.log(response.status)
    });
}

// Evento inicio sesion usuario
document.querySelector("#inicioSesion").addEventListener('submit', iniciarSesion);


//Funcion inicio sesion usuario
function iniciarSesion(e) {
  e.preventDefault();

  let datos = new FormData(e.target);

  datosUsuario = {
    username: datos.get('usuario'),
    pass: datos.get('contraseña'),
  };

  let url = "http://localhost:5000/api/login/";
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(datosUsuario)
  })
    .then((response) => {
      return response.json();
    })
    .then((json)=>{
      console.log(json.username);
      //console.log(json.id)
      let token = json.token;
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      localStorage.setItem('usuario', json.username);

    });

  // Cambiar a página de unicio
    window.location.replace('http://localhost/trotamundos/html/index.php');
}

