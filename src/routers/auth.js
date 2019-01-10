
const express = require('express');

const UserService = require('../services/UserService'); 

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.internal.payload;
    await res.send(await UserService.token(email, password));
})

router.post('/register', async (req, res) => { 
    const user = req.internal.payload;
    await res.send(await UserService.register(user));
});

module.exports = router;
