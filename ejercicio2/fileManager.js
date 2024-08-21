/*var fs = require('fs');
var obj;

fs.readFile('./files/participantes.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});*/

var fs = require('fs');
var arr = JSON.parse(fs.readFileSync('./files/participantes.json', 'utf8'));

console.log("Objeto: ", arr.datos)

arr.datos.forEach(element => {
  console.log("Element: ", element)
});