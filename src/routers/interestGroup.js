const express = require('express');
const isAuth = require('../middleware/isAuth');
const InterestGroupService = require('../services/IntrestGroupService');

const router = express.Router();

// subscribe to a warning
router.post('/subscribe/:id', async (req, res) => {
    console.log('outside catch');
    try {
        const warningId = req.params.id;
        const userId = '6ccc6d70-f39e-4020-ad12-2d89f13e34a3';

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
router.delete('/subscribe/:id', async (req, res) => {
    try {
        const warningId = req.params.id;
        const userId = '6ccc6d70-f39e-4020-ad12-2d89f13e34a3';

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
