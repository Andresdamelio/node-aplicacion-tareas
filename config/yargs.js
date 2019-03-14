
const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: false,
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
.command('crear', 'En esta opción se crea una tarea por hacer', {
   descripcion
})
.command('actualizar', 'Esta opcion es usada para actualizar una tarea por hacer', {
    descripcion,
    completado
})
.command('borrar', 'Esta opción es usada para eliminar una tarea por hacer', {
    descripcion
})
.command('filtrar', 'Esta opcion permite filtrar las tareas completadas o no', {
    completado
})
.help()
.argv;

module.exports = {
    argv
}