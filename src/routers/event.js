const express = require('express');
const upload = require('../middleware/filehandler');

const EventService = require('../services/EventService');

const router = express.Router();

// create image
router.post('/image', upload.single('image'), async (req, res) => {
    console.log('RETURNED FROM GOOGLE CLOUD', req.file);

    if (!req.file) {
        res.status(500).send({ error: 'Could not upload image' });
        return;
    }

    const r = await EventService.image.create(
        { ...req.body, fileURL: req.file.path },
        req.userId
    );
    await res.status(r.status).send({ image: req.file.path });
});

// get events
router.get('/', async (req, res) => {
    const r = await EventService.warning.retrive(req.query, req.userId);
    await res.send(await r.json(), r.status);
});

router.get('/:id', async (req, res) => {
    const r = await EventService.warning.retriveOne(req.params.id, req.userId);
    await res.send(await r.json(), r.status);
});

router.get('/content/:id', async (req, res) => {
    const result = await EventService.content.retrieve(
        req.params.id,
        req.userId
    );
    await res.send(await result.json(), result.status);
});

// create event
router.post('/', async (req, res) => {
    const r = await EventService.warning.create(req.body, req.userId);
    await res.send(await r.json(), r.status);
});

module.exports = router;
