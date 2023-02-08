cambiarBotonUsuario();

function cambiarBotonUsuario (){
    let boton = document.getElementById('botonLogin');
    if(localStorage.getItem('usuario') !== "undefined"){
        boton.textContent = localStorage.getItem('usuario');
    }else{
        boton.textContent = 'Entrar/Registrarse';
    }
}