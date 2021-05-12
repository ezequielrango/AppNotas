const fs = require('fs');          
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8')); // Declaro una const tareas, donde se guardara el archivo .json parseado listo para trabajar con js. Para leerlo usaremos la propiedad del'fs'
module.exports = { 
    verCartel : function(mensaje){  
        console.log('************************'); 
        console.log(mensaje); 
        console.log('************************'); 
    },
    agregarTarea : function(titulo,estado='pendiente') { 
        let nuevaTarea = { 
            titulo, 
            estado
        }
        tareas.push(nuevaTarea); 
        this.guardarJson(tareas); 
        this.verCartel('TAREA AGREGADA')
        this.listarTareas(); 
    },
    listarTareas : function(){  
        tareas.forEach(tarea => { // A la variable le aplicamos el metodo de array. El metodo recibe un callback, y se encarga de iterar todo el array.
                console.log(tarea); 
        });
    },
    filtrarTareas : function(filtro){ 
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        return console.log(tareasFiltradas)
    },
    deshacer : function(){ 
        tareas.pop()
        this.guardarJson(tareas) 
        this.verCartel('DESHACER EXITOSO')
        this.listarTareas() 
    },
    guardarJson : function(tareas){ 
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8') 
    }
  }
