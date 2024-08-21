const file = require("./moduloFS")

// lsit
let data = [] // variable global

async function leerArchivo () {

    try {
        const archivo = await file.readThisFile("./files/participantes.json")
        if(archivo != null && archivo.length > 0) {
            const info = JSON.parse(archivo)

            data = info.datos // guardamos toda la info del json en esta variable 
        }

        //console.log(archivo.datos) json estilo
        console.log(archivo["datos"]) // python similar estilo

    } catch (error) {
        
    }
}

async function filtrarInfo() {
    try {
        await leerArchivo()
        const filtro = data.filter(e => e.sexo == 'M')

        console.log(filtro);
    } catch (error) {
        console.error('¡Oh no! D:')
    }
}

async function contarP() {
    try {
        await leerArchivo()
        const cantidad = data.filter(e => e.sexo == 'M').length
        console.log(cantidad);
    } catch (error) {
        console.log(error);
    }
}

leerArchivo()
filtrarInfo()
contarP()

