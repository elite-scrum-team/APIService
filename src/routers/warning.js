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
    await res.send(await r.json());
});

// get warnings
router.get('/', async (req, res) => {
    await res.send(await WarningService.warning.retrive(req.query));
});

router.get('/:id', async (req, res) => {
    await res.send(await WarningService.warning.retriveOne(req.params.id));
});

// create warning
router.post('/', async (req, res) => {
    const r = await WarningService.warning.create(req.body);
    await res.send(r.json());
});

module.exports = router;
