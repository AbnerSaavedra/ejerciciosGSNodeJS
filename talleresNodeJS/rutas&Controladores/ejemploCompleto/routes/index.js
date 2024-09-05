// routes/index.js 
const express = require('express'); 
const router = express.Router(); 
const userRoutes = require('./userRoutes');
//const postRoutes = require('./postRoutes')

router.use('/user', userRoutes);

router.get('/', (req, res) => { 
    res.send('Página principal'); 
});
//router.use('/post', postRoutes);

module.exports = router;