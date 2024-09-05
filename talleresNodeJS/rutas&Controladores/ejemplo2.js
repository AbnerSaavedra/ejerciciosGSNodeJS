const express = require('express');
const app = express();

// Definir una ruta con un parámetro de ruta 
app.get('/user/:id', (req, res) => { 
    res.send(`Usuario ID: ${req.params.id}`); 
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`); 
});