
const colors = require('colors');
const argv = require('./config/yargs').argv;
const tarea = require('./tareas/tareas')

let comando = argv._[0];

switch( comando ) {

    case 'crear': 
       let porHacer = tarea.crear(argv.descripcion);
       console.log("Tarea creada con éxito", porHacer);
       
    break;

    case 'listar':
        let tareas = tarea.getListado();
        
        for(let t of tareas){
            console.log('======= Tareas por hacer ======='.green);
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

    case 'filtrar':
    let filtro = tarea.filtrar( argv.completado );
    for(let f of filtro){
        if(argv.completado){
            console.log('======= Tareas realizadas ======='.green);
        }
        else{
            console.log('======= Tareas por hacer ======='.green);
        }
        
        console.log(f.descripcion);
        console.log('================================'.green);
    }
    break;

    default:
        console.log("Comando no reconocido");
}