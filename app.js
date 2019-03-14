
const colors = require('colors');
const argv = require('./config/yargs').argv;
const tarea = require('./tareas/tareas')

let comando = argv._[0];

switch( comando ) {

    case 'crear': 
       let porHacer = tarea.crear(argv.descripcion);
       if(porHacer){
        console.log("Tarea creada con éxito", porHacer);
       }
    break;

    case 'listar':
        let tareas = tarea.getListado( argv.completado );
        
        for(let t of tareas){
            if(!t.completado){
                console.log('======= Tarea por hacer ======='.blue);
            }
            else{
                console.log('======= Tarea realizada ======='.red);
            }
            console.log(t.descripcion);
            console.log('Estado: ',t.completado);
            console.log('================================'.green);
        }
    break;

    case 'actualizar':
       let actualizado = tarea.actualizar(argv.descripcion, argv.completado);
       console.log(actualizado); 
    break;
    
    case 'borrar':
        let borrado = tarea.eliminar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log("Comando no reconocido");
}