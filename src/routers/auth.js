const express = require('express');

const UserService = require('../services/UserService');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const r = await UserService.token(email, password);
    await res.send(await r.json());
});

router.post('/register', async (req, res) => {
    const user = req.body;
    const r = await UserService.register(user);
    await res.send(r.json());
});

module.exports = router;
