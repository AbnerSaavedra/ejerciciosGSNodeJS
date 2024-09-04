// Módulo de rutas
const express = require('express')
const router = express.Router()

// Ahora usamos nuestro router para crear las rutas
router.get('/', (req, res)=>{
    res.send("Wiki home page - get")
})

router.get('/about', (req, res)=>{
    res.send("Wiki about page - post")
})

router.post('/about', (req, res)=>{
    res.send("Wiki about page")
})

module.exports = router