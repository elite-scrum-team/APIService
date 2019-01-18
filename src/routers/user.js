const router = require('express').Router();

const UserService = require('../services/UserService');

router.get('/group', async (req, res) => {
    const r = await UserService.retrieveGroups(req.query, req.userId);
    await res.send(await r.json(), r.status);
});

module.exports = router;
