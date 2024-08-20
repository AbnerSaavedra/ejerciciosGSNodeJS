/*const rfile = require("./archivosNodeJS/readFile")
const wfile = require("./archivosNodeJS/writeFile")
const afile = require("./archivosNodeJS/appendFile")
const ofile = require("./archivosNodeJS/openFile")*/
const dfile = require("./archivosNodeJS/deleteFile")
const rfile = require("./archivosNodeJS/renameFile")

/*rfile.readThisFile("./files/participantes.txt")

wfile.writeToFile("./files/fileToWrite-1.txt", "Hola mundo 2")

afile.appendToFile("./files/fileToAppend.txt", "Hola mundo")

ofile.openFile("./files/fileToOpen.txt", "Hola mundo 7")*/

dfile.deleteFile("./files/fileToDelete.txt")

rfile.renameFile("./files/fileToRename.txt", "./files/fileToRename2.txt")
