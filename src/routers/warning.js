const express = require('express');
const upload = require('../middleware/filehandler');
const isAuth = require('../middleware/isAuth');

const WarningService = require('../services/WarningService');
const MapService = require('../services/MapService');

const router = express.Router();

// create status
router.post('/status', async (req, res) => {
    const r = await WarningService.status.create(req.body, req.userId);
    await res.send(await r.json(), r.status);
});

// create image
router.post('/image', upload.single('image'), async (req, res) => {
    console.log('RETURNED FROM GOOGLE CLOUD', req.file);

    if (!req.file) {
        res.status(500).send({ error: 'Could not upload image' });
        return;
    }

    const r = await WarningService.image.create(
        { ...req.body, fileURL: req.file.path },
        req.userId
    );
    await res.status(r.status).send({ image: req.file.path });
});

// get categories
router.get('/category', async (req, res) => {
    const r = await WarningService.category.retrive();
    await res.send(await r.json(), r.status);
});

router.get('/category/:id', async (req, res) => {
    const r = await WarningService.category.retrieveOne(
        req.params.id,
        req.userId
    );
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
        req.params.id,
        req.userId
    );
    await res.send(await result.json(), result.status);
});

router.get('/close/:lat/:lng', async (req, res) => {
    // Get locationIds based on position
    const location = { lat: req.params.lat, lng: req.params.lng };

    const result = await MapService.location.close(location, req.userId);
    const locations = await result.json();

    if (locations.length === 0) {
        await res.status(200).send([]);
        return;
    }

    // Get warnings based on locations
    const locationIds = locations.map(l => l.id);

    const r = await WarningService.warning.retrive(
        { ...req.query, positions: locationIds },
        req.userId
    );
    await res.send(await r.json(), r.status);
});

// create warning
router.post('/', isAuth, async (req, res) => {
    const r = await WarningService.warning.create(req.body, req.userId);
    await res.send(await r.json(), r.status);
});

router.post('/contract', isAuth, async (req, res) => {
    const result = await WarningService.contract.create(req.body, req.userId);
    await res.send(await result.json(), result.status);
});

// change warning
router.put('/:id', isAuth, async (req, res) => {
    const result = await WarningService.warning.update(
        req.params.id,
        req.body,
        req.userId
    );
    await res.send(await result.json(), result.status);
});

// create comment
router.post('/comment', isAuth, upload.single('image'), async (req, res) => {
    const r = await WarningService.comment.create(
        { ...req.body, fileURL: req.file ? req.file.path : null },
        res.userId
    );
    await res.send(await r.json(), r.status);
});

module.exports = router;
