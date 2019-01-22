const express = require('express');

const UserService = require('../services/UserService');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const r = await UserService.token(email, password);
    await res.send(await r.json(), r.status);
});

router.post('/register', async (req, res) => {
    const user = req.body;
    const r = await UserService.register(user);
    await res.send(r.json(), r.status);
});

router.post('/change', async (req, res) => {
    const password = req.body.password;
    const r = await UserService.changePassword(req.userId, password);
    await res.send(r.json(), r.status);
});

router.get('/user', async (req, res) => {
    // Check if userId is provided
    if (!req.userId) {
        res.status(400).send({ error: 'You need to be authenticated' });
        return;
    }

    const r = await UserService.getUserData(req.userId);
    await res.send(await r.json(), r.status);
});

module.exports = router;
