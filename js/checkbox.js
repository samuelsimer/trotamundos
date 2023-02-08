let checkboxGroup = document.querySelectorAll('#checkboxKM li input');
checkboxGroup.forEach((item) => item.addEventListener('click', filtroKM));

let filtro = [-1,-1];
let min = 0;
let max = 0;
let seleccionados = []
// Seleccionar checkbox
function filtroKM(e){
    // let valores =  e.target.value.split('-')
    // console.log(seleccionados.includes(valores[0]))
    if(seleccionados.includes(valores[0])){
        seleccionados = seleccionados.filter(item =>{
            return item !== valores[0]
        })

    }else{
        seleccionados.push(valores[0])
    }
    if(seleccionados.includes(valores[1])){
        seleccionados = seleccionados.filter(item =>{
            return item !== valores[1]
        })

    }else{
        seleccionados.push(valores[1])
    }

    min = seleccionados.length !== 0 ? Math.min(...seleccionados) : -1
    max = seleccionados.length !== 0 ? Math.max(...seleccionados) : -1
    let valoresFiltro = [min,max]
    // console.log(valoresFiltro)

    min === -1 ? renderRutas(): renderRutas(valoresFiltro)




}