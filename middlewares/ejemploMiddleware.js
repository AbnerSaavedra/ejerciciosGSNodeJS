const express = require('express')

const app = express()

app.use(express.json())

const port = 5000

app.listen(port, ()=>{
    console.log(`Servidor iniciado en http://locahost:${port}`)
})

function verificadorUsuario(req, res, next){
    console.log("Request body: ", req.body)
    if (req.body.isAdmin){
        next()
    }else{
        //next(new Error('Usted no es un usuario admin'))
        res.status(403).send('Usted no es un usuario admin')
    }
}

app.get('/dashboard', verificadorUsuario,(req, res)=>{
    
    console.log("Request body: ", req.body)
    res.status(200).json({mensaje: "Eres un usuario administrador"})
})