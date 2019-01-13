const express = require('express');

const WarningService = require('../services/WarningService');

const router = express.Router();

// get warnings
router.get('/', async (req, res) => {
    return await WarningService.warning.retrive(req.query);
});

router.get('/:id', async (req, res) => {
    return await WarningService.warning.retriveOne(req.params.id);
});

// create warning
router.post('/', async (req, res) => {
    return await WarningService.warning.create(req.body);
});

// create image
router.post('/image', async (req, res) => {
    return await WarningService.image.create(req.body);
});

module.exports = router;
