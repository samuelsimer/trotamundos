let boton = document.getElementById('cerrarSesion')
let botonPrincipal = document.getElementById('botonLogin')
botonPrincipal.addEventListener('click', redireccion);
boton.addEventListener('click', cerraSesion);
let menuUsuario = document.querySelector('.botonLogin nav');
cambiarBotonUsuario();

function cambiarBotonUsuario (){
    let boton = document.getElementById('botonLogin');
    let navUsuario= document.getElementById('navUsuario')
    if(localStorage.getItem('username') !== null){
        menuUsuario.classList.add("navUsuario");
        boton.textContent = localStorage.getItem('username');
    }else{
        menuUsuario.classList.remove("navUsuario");
        boton.textContent = 'Entrar/Registrarse';
    }
}


function redireccion(){
    if(localStorage.getItem('token') ===null)     window.location.replace("registro.php");
    
}
function cerraSesion(){
    
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('pass');
    localStorage.removeItem('height');
    localStorage.removeItem('weight');
    localStorage.removeItem('birthday');
    localStorage.removeItem('activities');
    window.location.reload("index.php");
}