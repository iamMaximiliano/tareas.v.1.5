//Requiero el archivo funcionDeTareas para poder ejecutar sus metodos
const funcionesDeTareas = require("./funcionesDeTareas");

//Se requiere process para utilizar su metodo .argv
//El primer elemento será 'node', el segundo elemento será el nombre del archivo JavaScript. Los siguientes elementos serán argumentos adicionales de la línea de comandos.
const process = require("process");


const comando = process.argv[2];


switch (comando) {

    case "Listar": funcionesDeTareas.listar()
    break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción​.")
        break;

        case "crear":
            let titulo = process.argv[3];
            if(!titulo){
                break
            }
            let estado = process.argv[4];
            funcionesDeTareas.escribirJSON(titulo,estado)
            break;

            case "filtrar": 
            console.log(funcionesDeTareas.filtrarPorEstado(process.argv[3]))
            break
        default:
        console.log("No entiendo qué quieres hacer")
        break;
}