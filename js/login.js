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

  let posiblesActividades = ['cbCaminar', 'cbCorrer', 'cbBicicleta', 'cbMoto', 'cbCoche'];

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


  $usuario = JSON.stringify(datosUsuario);

  console.log(JSON.stringify(datosUsuario));

  // let url = "http://localhost:5000/api/register/";
  let url = "http://localhost/trotamundos/api/usuarios/register.php";
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: $usuario
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



  let url = "http://localhost/trotamundos/api/usuarios/login.php";
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(datosUsuario)
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {

      localStorage.setItem('id' , json.id);
      localStorage.setItem('fullname' , json.fullname);
      localStorage.setItem('username' , json.username);
      localStorage.setItem('email' , json.email);
      localStorage.setItem('pass' , json.pass);
      localStorage.setItem('height' , json.height);
      localStorage.setItem('weight' , json.weight);
      localStorage.setItem('birthday' , json.birthday);
      localStorage.setItem('activities' , json.activities);

      let token = json.token;
      localStorage.setItem('token', json.token);

      // Cambiar a página de unicio
      window.location = 'index.php';

    });

  
}

