const express = require('express');
const app = express();

// Ruta GET para la página principal 
app.get('/', (req, res) => { 
    res.send('Página principal'); 
});

// Ruta GET para la página de "about" 
app.get('/about', (req, res) => { 
    res.send('Página About'); 
});

// Ruta POST para el manejo de formularios 
app.post('/submit', (req, res) => { 
    res.send('Formulario enviado'); 
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`); 
});