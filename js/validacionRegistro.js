//Funciones de validacion
let contraseña = document.querySelector("#registrarse .contraseña");
let email = document.querySelector("#registrarse .email");
let contraseña2 = document.querySelector("#registrarse .contraseña2");
let nombre = document.querySelector("#registrarse .nombre");
let nUsuario = document.querySelector("#registrarse .nUsuario");
let repetirContraseña = document.querySelector("#registrarse .contraseña2");
let peso = document.querySelector("#registrarse .peso");
let estatura = document.querySelector("#registrarse .estatura");

email.addEventListener('blur', validarEmail);
contraseña.addEventListener('blur', validarContraseña);
repetirContraseña.addEventListener('blur', validarContraseñarepetida);
nombre.addEventListener('blur', validarNombre);
nUsuario.addEventListener('blur', validarNUsuario);
peso.addEventListener('blur', validarPeso);
estatura.addEventListener('blur', validarEstatura);

//Validación nombre
function validarNombre(){
    document.querySelector(".vNombre").textContent = !nombre.value.match(/(\w+\s?\w*)+/g) ?
        "Campo incorrecto, no dejes el campo vacío y escribe solo letras" : "";

        if(nombre.value.match(/(\w+\s?\w*)+/g)){
            nombre.value = "";
        }
    
}

//Validación nombre usuario
function validarNUsuario(){
    document.querySelector(".vUsuario").textContent = !nUsuario.value.match(/(\w+\s?\w*)+/g) ?
        "Campo incorrecto, no dejes el campo vacío y escribe solo letras" : "";

        if(nUsuario.value.match(/(\w+\s?\w*)+/g)){
            nUsuario.value = "";
        }
}

//Validación email
function validarEmail(){
    document.querySelector(".vEmail").textContent = !email.value.match(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+/g) ?
        "email incorrecto, el formato es: a@a.a" : "";

        console.log(email.value.match(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+/g));

        if(!email.value.match(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+/g)){
            email.value = "";
        }
}

//Validación contraseña registro
function validarContraseña(){

    let contraseñaDividida = contraseña.value.split('');

    let medidorContraseña = [
        {'texto' : 'muy débil', 'color' : 'purple'},
        {'texto' : 'débil', 'color' : 'red'},
        {'texto' : 'aceptable', 'color' : 'orange'},
        {'texto' : 'fuerte', 'color' : 'yellow'},
        {'texto' : 'muy segura', 'color' : 'green'}
    ];
    
    
    
    let minusculas = 'qwertyuiopasdfghjklñzxcvbnm'.split('');
    let mayusculas = 'QWERTYUIOPASDFGHJKLÑZXCVBNM'.split('');
    let numeros = '1234567890'.split('');
    if(contraseña.value != ''){
        let seguridadContraseña = -1;

        //FORMA MAS CORTA
        let numMinusculas = 0;
        let numMayusculas = 0;
        let numDigits = 0;
        let numSimbols = 0;

        contraseñaDividida.forEach((item) => {
            numMinusculas += minusculas.includes(item) ? 1 : 0;
            numMayusculas += mayusculas.includes(item) ? 1 : 0;
            numDigits += numeros.includes(item) ? 1 : 0;
            
        });
        numSimbols += contraseñaDividida.length - (numMinusculas + numMayusculas + numDigits);

        seguridadContraseña += numMinusculas > 0 ? 1 : 0;
        seguridadContraseña += numMayusculas > 0 ? 1 : 0;
        seguridadContraseña += numDigits > 0 ? 1 : 0;
        seguridadContraseña += numSimbols > 0 ? 1 : 0;
        seguridadContraseña += contraseñaDividida.length > 8 ? 1 : 0;

        let medidor = document.querySelector('.nvlContraseña');
        console.log(seguridadContraseña);
    
        medidor.style.backgroundColor= medidorContraseña[seguridadContraseña].color;
    
        medidor.textContent = medidorContraseña[seguridadContraseña].texto;
    }else{
        //Si no hay nada escrito
        let medidor = document.querySelector('#nvlContraseña');
    
        medidor.style.backgroundColor= medidorContraseña[0].color;
    
        medidor.textContent = medidorContraseña[0].texto;
    }
}

// Validar repetir contraseña
function validarContraseñarepetida(){
    document.querySelector(".vContraseña2").textContent = !(contraseña.value == repetirContraseña.value) ?
        "La contraseña no es la misma" : "";

        if(!(contraseña.value == repetirContraseña.value)){
            repetirContraseña.value = "";
        }
}

// Validar peso
function validarPeso(){
    document.querySelector(".vPeso").textContent = (parseInt(peso.value) > 300 && parseInt(peso.value) < 0) ?
        "Máximo: 300 y mínimo: 0" : "";
}

// Validar estatura
function validarEstatura(){
    document.querySelector(".vEstatura").textContent = (parseInt(estatura.value) > 300 && parseInt(estatura.value) < 0) ?
        "Máximo: 300 y mínimo: 0" : "";
}


//Asignar funciones a eventos de cada campo