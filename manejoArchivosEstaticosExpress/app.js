const express = require('express')
const path = require('path')

const app = express()

// Seteamos el motor de plantillas
app.set('view engine', 'hbs');
// Seteamos la carpeta para las vistas
app.set('views', __dirname + '/views');

app.use(express.json())

const port = 8000

// Definimos la ruta para los archivos estáticos
app.use('/publico', express.static(__dirname + '/public'))

app.listen( port ,()=>{
    console.log(`Servidor iniciado en http://locahost:${port}`)
})

// Renderizamos un archivo y enviamos datos para mostrarlos en el mismo
app.get('/', (req, res)=>{
    res.render('index', {title: "Hola", message: "Hola mundo"})
})

// Enviamos un archivo estático
app.get('/saludo', (req, res)=>{
    res.sendFile(path.join(__dirname, 'saludo.html'))
})

