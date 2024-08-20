const fs = require("./moduloFS")

const data = `Abner    Saavedra    33 \n
Lino    Benavides    20 \n
Ana     Mendoza      18 \n`

const fecha = new Date().toLocaleDateString('en-US')
const fechaActual = fecha.split('/').join('')
const nuevoNombre = "./files/Participantes"+fechaActual+".txt"

fs.appendToFile("./files/Participantes.txt", data)
fs.renameFile("./files/Participantes.txt", nuevoNombre)