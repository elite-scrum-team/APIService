const express = require('express');

const WarningService = require('../services/WarningService');

const router = express.Router();

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

// create image
router.post('/image', async (req, res) => {
    await res.send(await WarningService.image.create(req.body));
});

module.exports = router;
