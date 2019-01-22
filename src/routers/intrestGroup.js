const express = require('express');
const upload = require('../middleware/filehandler');
const isAuth = require('../middleware/isAuth');
const InterestGroupService = require('../services/IntrestGroupService');
const userService = require('../services/UserService');

const router = express.Router();

// c
router.post('/subscribe/:id', isAuth, async (req, res) => {
    try {
        const warningId = req.params.id;
        const userId = req.userId;

        const r = await InterestGroupService.warning.subscribe({
            warningId,
            userId,
        });
        await res.send(await r.json(), r.status);
    } catch (error) {
        res.send({ error: error });
    }
});

// create image
router.delete('/subscribe/:id', isAuth, async (req, res) => {
    try {
        const warningId = req.params.id;
        const userId = req.userId;

        const r = await InterestGroupService.warning.unsubscribe({
            warningId,
            userId,
        });
        await res.send(await r.json(), r.status);
    } catch (error) {
        res.send({ error: error });
    }
});
