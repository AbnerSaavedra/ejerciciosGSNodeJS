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

async function contarInfoSexo() {
    try {
        await leerArchivo()
        const filtro = data.filter(e => e.sexo == 'M').length

        console.log("Contar por sexo: ", filtro);
    } catch (error) {
        console.error('¡Oh no! D:')
    }
}

async function filtrarNombresP() {
    try {
        await leerArchivo()
        const cantidad = data.filter(e => e.nombre[0] == 'P')
        console.log("Cantidad por P: ",cantidad);
    } catch (error) {
        console.log(error);
    }
}

async function ordenarPorSexYEdad() {
    try {
        await leerArchivo()
        const participantes = data
        var mujeres = participantes.filter(e => e.sexo == 'F')
        var hombres = participantes.filter(e => e.sexo == 'M')
        var hombresOrder = hombres.sort( (a, b) => a.edad + b.edad )
        var mujeresOrder = mujeres.sort( (a, b) => a.edad + b.edad )
        hombresOrder = hombresOrder.concat(mujeresOrder)
        console.log("Participantes ordenados: ", hombresOrder)
    } catch (error) {
        console.log(error);
    }
}

/*leerArchivo()
filtrarNombresP()
contarInfoSexo()*/
ordenarPorSexYEdad()
