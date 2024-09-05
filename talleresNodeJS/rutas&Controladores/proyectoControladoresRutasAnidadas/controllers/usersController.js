// controllers/userController.js 
exports.getUser = (req, res) => { 
    res.send(`Usuario ID: ${req.params.id}`); 
};

exports.showAdmin = (req, res) => { 
    res.send('You are an admin'); 
};