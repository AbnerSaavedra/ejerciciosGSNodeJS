const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.json())

const port = 8000

app.use('/publico',express.static('public'))

app.listen( port ,()=>{
    console.log(`Servidor iniciado en http://locahost:${port}`)
})

app.get('/', (req, res)=>{
    res.render('index', {title: "Hola", message: "Hola mundo"})
})

app.get('/saludo', (req, res)=>{
    res.sendFile(path.join(__dirname, 'saludo.html'))
})

