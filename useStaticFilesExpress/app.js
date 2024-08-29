const express = require('express')

const app = express()

const port = 8000

app.use(express.json())

// Se recomienda usar rutas absolutas
app.use(express.static(__dirname + '/public'))

app.listen(port, ()=>{
    console.log(`Aplicación funcionando en localhost:${port}`)
})

app.get('/', (req, res)=>{
    res.send("Hola mundo")
})