const express = require('express');
const isAuth = require('../middleware/isAuth');
const InterestGroupService = require('../services/IntrestGroupService');

const router = express.Router();

// subscribe to a warning
router.post('/subscribe/:id', isAuth, async (req, res) => {
    try {
        const warningId = req.params.id;
        const userId = req.userId;
        console.log('I am here');

        const r = await InterestGroupService.warning.subscribe({
            warningId,
            userId,
        });
        console.log(await r.json());

        await res.send(await r.json(), r.status);
    } catch (error) {
        res.send({ error: error });
    }
});

// unsubscribe to a warning
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

module.exports = router;
