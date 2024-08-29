const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

let jsonData = {'data': []}
let estudiante = {}

function verificarJSONExiste(filePath, objeto){

    let ruta = path.join(__dirname, filePath)
    if (fs.existsSync(ruta)) {
        jsonData = JSON.parse(fs.readFileSync(ruta, 'utf8'));
        jsonData.data.push(objeto)
    } else {
        let dataPrevia = jsonData.data 
        dataPrevia.push(objeto)
        jsonData = {'data': dataPrevia}
    }
    
    fs.writeFileSync(ruta, JSON.stringify(jsonData, null, 4) , err => {
        console.log("Escribir", ruta)
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al guardar la información.');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Información guardada exitosamente');
        }
    });
}

const server = http.createServer((req, res) => {
    const datosURL = url.parse(req.url, true)

    console.log(datosURL)
    console.log("Query: ", datosURL.query)
    if (req.method === 'GET' && (datosURL.pathname === '/' || 
        datosURL.pathname === '/index')) {
        // Servir el archivo HTML
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/guardar') {
        // Procesar datos del formulario y guardar en un archivo
        let data = '';
        req.on('data', arepa => {
            data += arepa;
        });
        req.on('end', () => {
            const parsedData = new URLSearchParams(data);
            const nombre = parsedData.get('nombre');
            const edad = parsedData.get('edad');
            const curso = parsedData.get('curso');
            const id = jsonData.data.length + 1

            const estudiante = {
                "id": id,
                "nombre": nombre, 
                "edad": edad, 
                "curso": curso
            }

            verificarJSONExiste('estudiantes.json', estudiante)
            
            res.end('Información guardada exitosamente');
        });
    } else if (req.method === 'POST' && req.url === '/modificar') {
        let datos = '';
        req.on('data', arepa => {
            datos += arepa;
        });

        req.on('end', () => {
            // Parsear los datos del formulario
            const parsedData = new URLSearchParams(datos);
            
            const nombre = parsedData.get('nombre');
            const edad = parsedData.get('edad');
            const curso = parsedData.get('curso');
            const id = parsedData.get('id')
            // Guardar en un archivo de texto
            const estudiante = {
                "id": parseInt(id),
                "nombre": nombre, 
                "edad": edad, 
                "curso": curso
            }
            let estudiantes = JSON.parse(fs.readFileSync(path.join(__dirname, 'estudiantes.json'), 'utf8'));

            console.log("Estudiantes: ", estudiantes)

            estudiantes.data[parseInt(id)-1] = estudiante

            console.log("Estudiante a modificar: ", estudiantes)

            fs.writeFileSync(path.join(__dirname, 'estudiantes.json'), JSON.stringify(estudiantes, null, 4) , err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error al guardar la información.');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Información guardada exitosamente');
                }
            });

            
            res.end('Información modificada exitosamente');
        })

    } else if (req.method === 'GET' && req.url === '/consultarEstudiantes') {

        fs.readFile(path.join(__dirname, 'estudiantes.json'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/text'});
                res.end('Error al cargar el archivo JSON.');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(data);
        });
    } else if (req.method === 'GET' && datosURL.pathname === '/estudiantes') {
        // Servir el archivo HTML
        const filePath = path.join(__dirname, 'estudiantes.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'GET' && datosURL.pathname === '/estudiante/') {
        console.log("Estudiante", datosURL.query.id)
        let id = datosURL.query.id
        let ruta = path.join(__dirname, 'estudiantes.json')
        jsonData = JSON.parse(fs.readFileSync(ruta, 'utf8'));
        estudiante = jsonData.data[id-1]

        // Servir el archivo HTML
        const filePath = path.join(__dirname, 'editarEstudiante.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'GET' && datosURL.pathname === '/consultarEstudiante') {

        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify(estudiante));
        
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada.');
    }
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT}`);
});