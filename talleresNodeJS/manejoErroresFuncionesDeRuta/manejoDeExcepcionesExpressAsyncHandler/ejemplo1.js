const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const asyncHandler = require('express-async-handler')

router.get("/users", asyncHandler( (req, res, next =>{
    const successfulResult = fs.readFileSync(path.join(__dirname, 'estudiantes.json'))
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.parse(successfulResult));
})
)) 

module.exports = router