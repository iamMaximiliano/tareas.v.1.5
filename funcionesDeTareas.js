//requiero el modulo fs
const fs = require("fs");

//parseo el archivo json para poder trabajar con él y lo leo con modulo FS
const tareas = JSON.parse(fs.readFileSync("./tareas.json","utf-8"));


module.exports = {

//Recorre cada elemento de la lista de TAREAS y lo muestra por consola
    listar : function(){
        tareas.forEach(tarea => {
            console.log(tarea);
        })
    },

    //Ejecuta una FUNCION en la cual se GUARDA en una nueva VARIABLE el titulo y estado que se ESCRIBEN, luego se PUSHEA (se agrega al final del array) la informacion ESCRITA (titulo y estado), se GUARDA la informacion en formato JSON con JSON.stringify(en el archivo tareas.json) y se muestra una LISTA de las tareas creadas
        escribirJSON : function(titulo,estado="pendiente"){
        let escribir ={
            titulo : titulo,
            estado : estado}
        tareas.push(escribir);
        this.guardarJson(tareas);
        this.listar();
        },
            
//Ejecuta una funcion que contiene TAREAS para ser guardadas en formato JSON en el archivo tareas.json utilizando el modulo fs para requerir su metodo writeFileSync para poder escribir dentro del archivo tareas la tarea que se quiere guardar. con JSON.stringify la tarea se guarda en formato JSON
    guardarJson : function(tareas){
        fs.writeFileSync("./tareas.json",JSON.stringify(tareas),"utf-8");
        },

        filtrarPorEstado : function(filtro){
            let leerPorEstado = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
            return leerPorEstado
    }
}