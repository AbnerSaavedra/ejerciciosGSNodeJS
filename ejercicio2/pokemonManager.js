const file = require("./moduloFS")

async function leerArchivoJSON(){

    try {
        const archivo = await file.readThisFile("./files/informacion.json")
        
    } catch (error) {
        
    }
}