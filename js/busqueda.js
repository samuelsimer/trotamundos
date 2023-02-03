añadirListener();

// Añadir Listener
function añadirListener(){
    //Desplegar y minimizar filtros
    document.querySelector('#filtros').addEventListener('click', function(){
        let divFiltros = document.querySelector('.filtros');
        if(divFiltros.style.display == "initial"){
            divFiltros.style.display = "none";
        }else {
            divFiltros.style.display = "initial"
        }
    } );
}