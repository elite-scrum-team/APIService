const express = require('express');

const WarningService = require('../services/WarningService');

const router = express.Router();

// create image
router.post('/image', async (req, res) => {
    await res.send(await WarningService.image.create(req.body));
});

// get categories
router.get('/category', async (req, res) => {
    await res.send(await WarningService.category.retrive());
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
    await res.send(await WarningService.warning.create(req.body));
});

module.exports = router;
