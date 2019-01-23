const services = require('../util/service.js')

if (!process.env.ANALYTICS_SERVICE_SERVICE_HOST) {
    process.env['ANALYTICS_SERVICE_SERVICE_HOST'] = 'rip'
}

module.exports = {
    async distrobution(query) {
        return await services.fetch.get(
            'analytics',
            'distrobution',
            query
        )
    }
}