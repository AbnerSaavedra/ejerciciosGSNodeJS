// routes/index.js 
const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/usersController');

// Middleware específico para la ruta /admin 
const adminMiddleware = (req, res, next) => { 
    console.log('Se ha accedido a la ruta /admin'); 
    next(); 
};

router.get('/admin', adminMiddleware, userController.showAdmin);
router.get('/:id', userController.getUser); 
router.post('/', userController.createUser);

module.exports = router;