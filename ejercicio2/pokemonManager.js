const file = require("./moduloFS")

let data = []

async function leerArchivoJSON(){

    try {
        const archivo = await file.readThisFile("./files/informacionPoq.json")
        if(archivo != null && archivo.length > 0){
            const info = JSON.parse(archivo)

            data = info.datos
        }

        console.log(archivo["datos"])
        
    } catch (error) {
        console.log(error)
    }
}

async function filtrarInfo() {
    try {
        await leerArchivoJSON()
        const filtroAgua = data.filter(p => p['type'].includes('water') )

        console.log("Filtro agua: ", filtroAgua)
    } catch (error) {
        console.log(error)
    }
}

async function filtrarNombresP() {
    try {
        await leerArchivoJSON()
        const cantidad = data.filter(p => p.name[0] == 'p').length
        console.log("Cantidad por P: ",cantidad);
    } catch (error) {
        console.log(error);
    }
}

async function contarPorTipo() {
    try {
        await leerArchivoJSON()

        let tipos = []
        tipos = data.map(p => {
            return p['type'].join(',')
        }).join(',').split(',')

        console.log(tipos)

        const tiposUnicos = [...new Set(tipos)]
        console.log(tiposUnicos)

        let contador = 0;
        let arrayContador = []
        for (let i = 0; i < data.length; i++) {
            console.log("Data types: ",data[i]['types'])
            for (let j = 0; j < tiposUnicos.length; j++) {
                if (data[i]['types'].includes(tiposUnicos[j])) 
                    contador++;
        }
        arrayContador.push(contador)
        console.log("arrayContador: ", arrayContador)
    }
    } catch (error) {
        
    }
}

//leerArchivoJSON()
//filtrarInfo()
//filtrarNombresP()
contarPorTipo()