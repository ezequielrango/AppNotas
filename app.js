const moduloTareas = require('./tareas'); // Requiero el modulo tareas (index)
const process = require('process'); // Declaro una constante, requiriendo del modulo nativo el método "process", para trabajar con la terminal.

const palabraIngresada = process.argv[2]; // Declaro una const, utilizando de Process la propiedad .argv[] , encargada de tomar la posicion del elemento del array dado en la terminal.

switch (palabraIngresada) {  
    case 'agregar':  //En caso de escribir 'agregar' en la posicion [2] hacer lo siguiente:
        let titulo = process.argv[3];  // declarar variable titulo, que recibirá el valor escrito en la posicion [3].
        if(!titulo){  //Si no es ingresado un título realizar lo siguiente:
            console.log('OLVIDASTE DE PONER EL TITULO'); 
            break
        }
        let estado = process.argv[4]; //Declaro una variable donde se recibirá el estado de la tarea en la posicion [4].
        moduloTareas.agregarTarea(titulo,estado) 
        break;
    case 'listar': // En caso de escribir "listar" en la posicion [2] hacer lo siguiente:
        moduloTareas.listarTareas() 
    case 'filtrar': // En caso de escribir "filtrar" en la posicion [2] hacer lo siguiente:
        moduloTareas.filtrarTareas(process.argv[3]) 
        break
    case 'deshacer' :  // En caso de escribir "filtrar" en la posicion [2] hacer lo siguiente:
        moduloTareas.deshacer() // Requiero del moduloTareas el metodo deshacer().
        break
    default:
        break;
}
