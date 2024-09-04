const express = require('express')

const app = express()

const port = 8000

app.get("/users/:userid/books/:bookid", (req, res)=>{
    res.status(200).send(req.params)
})

app.listen(port, ()=>{
    console.log(`Aplicación funcionando en localhost:${port}`)
})