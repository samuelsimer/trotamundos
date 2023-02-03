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

  // Evento crear JSON
  document.querySelector("#formulario").addEventListener('submit', crearJSON);
  function crearJSON(e) {
    e.preventDefault();

    let datos =new FormData(e.target);
    console.log(datos.get('actividades'));

    json = {
          fullname: datos.get('nombre'),
          username: datos.get('nUsuario'),
          email: datos.get('email'),
          pass: datos.get('contraseña'),
          height: datos.get('estatura'),
          weight: datos.get('peso'),
          birthday: datos.get('fechaNac'),
          activities: datos.get('actividades')
    }
    console.log(JSON.stringify(json));

    // datosCompletos = Object.fromEntries(datos.entries());

    // return JSON.stringify(datosCompletos);
  }