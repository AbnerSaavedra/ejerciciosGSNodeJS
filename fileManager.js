const rfile = require("./archivosNodeJS/readFile")
const wfile = require("./archivosNodeJS/writeFile")
const afile = require("./archivosNodeJS/appendFile")
const ofile = require("./archivosNodeJS/openFile")

rfile.readThisFile("./files/participantes.txt")

wfile.writeToFile("./files/fileToWrite-1.txt", "Hola mundo 2")

afile.appendToFile("./files/fileToAppend.txt", "Hola mundo")

ofile.openFile("./files/fileToOpen.txt", "Hola mundo 7")
