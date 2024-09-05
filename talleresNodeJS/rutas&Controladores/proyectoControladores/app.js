// app.js 
const express = require('express'); 
const app = express(); 
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000; app.listen(PORT, () => { 
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`); 
});