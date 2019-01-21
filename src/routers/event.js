const express = require('express');
const upload = require('../middleware/filehandler');
const isAuth = require('../middleware/isAuth');
const userService = require('../services/UserService');

const EventService = require('../services/EventService');

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
router.post('/', isAuth, async (req, res) => {
    const user_group = await userService.retrieveGroups({}, req.userId);
    const conf = user_group.find(e => e.id === req.body.location.municipality);
    if (conf) {
        req.body.userId = req.userData.id;
        const r = await EventService.event.create(req.body);
        await res.send(await r.json(), r.status);
    }
    return res.status(401).json({
        message: 'Auth failed',
    });
});

// get a spesific event
router.get('/:id', async (req, res) => {
    const r = await EventService.event.retriveOne(req.params.id);
    await res.send(await r.json(), r.status);
});
// get all events in a municipality
router.get('/municipality/:id', async (req, res) => {
    const r = await EventService.event.retrive(req.params.id);
    await res.send(await r.json(), r.status);
});

router.get('/content/:id', async (req, res) => {
    const result = await EventService.content.retrieve(req.params.id);
    await res.send(await result.json(), result.status);
});

module.exports = router;
