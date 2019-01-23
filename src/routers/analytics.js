
const AnalyticsService = require('../services/AnalyticsService')


const router = require('express').Router()



router.get('/distrobution', async (req, res) => {
    const result = await AnalyticsService.distrobution(req.query)
    await res.send(await result.json(), result.status)
})



module.exports = router