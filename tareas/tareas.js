

const fs = require('fs');

let listado = [];

const guardar = () => {
    let data = JSON.stringify(listado);

    fs.writeFile('db/data.json', data, (error) => {
        if(error) throw new Error('No se pudo guardar el archivo', error);
    })
}

const cargar = () => {
    try {
        listado = require('../db/data.json');
    } catch (error) {
        listado = [];
    }
}

const validacion = (descripcion) => {
    let index = listado.findIndex(tarea => {
        return tarea.descripcion.ignoreCase === descripcion.ignoreCase;
    })

    if(index != -1){
        console.log("Ya existe una tarea con esa descripción.");
        return true;
    }else{
        return false;
    }
}

const crear = (descripcion) =>{
    cargar();
    let estado = validacion(descripcion);
    if(estado){
        return false;
    }
    let porHacer = {
        descripcion,
        completado:false
    }
    listado.push(porHacer);
    guardar();
    return porHacer;
}

const getListado = (completado) => {
    cargar();
    if(completado == null){
        return listado;
    }
    else{
        let filtro = listado.filter( tarea => {
            return tarea.completado == completado;
        })
        return filtro;
    }
}

const actualizar = (descripcion, completado=true) => {
    cargar();

    let index = listado.findIndex( tarea => tarea.descripcion === descripcion)

    if(index >= 0) {
        listado[index].completado = completado;
        guardar();
        return true;
    }
    else {
        return false;
    }
}

const eliminar = (descripcion) => {
    
    cargar();

    /* Primera forma, obteniendo la posición y 
       eliminar la tarea del listado
    */
   
    let index = listado.findIndex( tarea => tarea.descripcion === descripcion);

    if( index >= 0){
        listado.splice(index, 1);
        guardar();
        return true;
    }
    else {
        return false;
    }

    /* Segunda forma, creando un nuevo arreglo a partir del existnte,
    excluyendo el archivo a eliminar, y sobreescribiendolo luego */

    /* let nuevoListado = listado.filter( tarea => {
        return tarea.descripcion !== descripcion;
    })

    if( nuevoListado.length === listado.length ) {
        return false;
    }
    else {
        listado = nuevoListado;
        guardar();
        return true;
    } */
}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}