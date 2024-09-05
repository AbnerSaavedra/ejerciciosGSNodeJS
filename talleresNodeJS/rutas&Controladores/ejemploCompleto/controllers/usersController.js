// controllers/userController.js 

exports.getUser = (req, res) => { 
    res.send(`Usuario ID: ${req.params.id}`); 
};

exports.createUser = (req, res) => { 
    const { username, email } = req.body; 
    res.send(`Usuario creado: ${username}, Email: ${email}`); 
};

exports.showAdmin = (req, res) => { 
    res.send('You are an admin'); 
};