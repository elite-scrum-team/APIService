const express = require('express');

const WarningService = require('../services/WarningService');

const router = express.Router();

// create image
router.post('/image', async (req, res) => {
    const r = WarningService.category.retrive();
    await res.send(r.json());
});

// get categories
router.get('/category', async (req, res) => {
    const r = await WarningService.category.retrive();
    await res.send(await r.json(), r.status);
});

// get warnings
router.get('/', async (req, res) => {
    const r = await WarningService.warning.retrive(req.query, req.userId);
    await res.send(await r.json(), r.status);
});

router.get('/:id', async (req, res) => {
    const r = await WarningService.warning.retriveOne(
        req.params.id,
        req.userId
    );
    await res.send(await r.json(), r.status);
});

// create warning
router.post('/', async (req, res) => {
    const r = await WarningService.warning.create(req.body, req.userId);
    await res.send(await r.json(), r.status);
});

module.exports = router;
