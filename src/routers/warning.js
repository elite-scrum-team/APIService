const express = require('express');
const upload = require('../middleware/filehandler');

const WarningService = require('../services/WarningService');

const router = express.Router();

// create status
router.post('/status', async (req, res) => {
    console.log('USER ID: ' + req.userId);
    const r = await WarningService.status.create(req.body, req.userId);
    await res.send(await r.json(), r.status);
});

// create image
router.post('/image', upload.any(), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);
    const r = await WarningService.image.create(req.body);
    await res.send(r.dataValues);
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

router.get('/content/:id', async (req, res) => {
    const result = await WarningService.content.retrieve(
        req.query.id,
        req.userId
    );
    await res.send(await result.json(), result.status);
});

// create warning
router.post('/', async (req, res) => {
    const r = await WarningService.warning.create(req.body, req.userId);
    await res.send(await r.json(), r.status);
});

module.exports = router;
