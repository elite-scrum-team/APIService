const express = require('express');

const MapService = require('../services/MapService');

const router = express.Router();

router.get('/municipality', async (req, res) => {
    const r = await MapService.municipality.retrieve(req.userId);
    await res.send(await r.json(), r.status);
});

module.exports = router;
