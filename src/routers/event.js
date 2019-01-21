const express = require('express');
const upload = require('../middleware/filehandler');
const isAuth = require('../middleware/isAuth');
const userService = require('../services/UserService');

const EventService = require('../services/EventService');

const MapService = require('../services/MapService');

const router = express.Router();

// create image
router.post('/image', isAuth, upload.single('image'), async (req, res) => {
    if (!req.file) {
        res.status(500).send({ error: 'Could not upload image' });
        return;
    }

    const r = await EventService.image.create({
        ...req.body,
        fileURL: req.file.path,
    });
    await res.status(r.status).send({ image: req.file.path });
});

// create event
router.post('/', async (req, res) => {
    try {
        const response = await userService.getUserData(req.userId);
        if (response.isError) res.status(500).send({ error: 'server error' });
        const user = await response.json();

        const resp = await MapService.location.retrieveInfo(req.body.location);

        if (resp.isError) res.status(500).send({ error: 'server error' });

        console.log(resp);
        const munici = await resp.json();

        console.log(munici);

        const conf = user.group
            .filter(e => e)
            .find(e => e.municipalitiy === munici.municipalityId);

        if (conf) {
            console.log('inside conf');
            req.body.userId = req.userId;
            const r = await EventService.event.create(req.body);
            await res.send(await r.json(), r.status);
        } else {
            await res.status(401).json({
                message: 'Auth failed',
            });
        }
    } catch (error) {
        res.send({
            error: error,
        });
    }
});

// get a spesific event
router.get('/:id', async (req, res) => {
    const r = await EventService.event.retriveOne(req.params.id);
    await res.send(await r.json(), r.status);
});
// get all events in a municipality
router.get('/municipality/:id', async (req, res) => {
    const r = await EventService.event.retrieveByMunicipality(req.params.id);
    await res.send(await r.json(), r.status);
});

// Get newest events
router.get('/', async (req, res) => {
    const r = await EventService.event.retrieve(req.query);
    await res.send(await r.json(), r.status);
});

router.get('/content/:id', async (req, res) => {
    const result = await EventService.content.retrieve(req.params.id);
    await res.send(await result.json(), result.status);
});

module.exports = router;
