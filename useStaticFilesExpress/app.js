const express = require('express')

const app = express()

const port = 8000

app.use('/public', express.static('public'))

app.listen(port, ()=>{
    console.log(`Aplicación funcionando en localhost:${port}`)
})