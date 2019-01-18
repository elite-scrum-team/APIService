const services = require('../util/service.js');

console.log(`map-service: ${process.env.MAP_SERVICE_SERVICE_HOST}`);

if (!process.env.MAP_SERVICE_SERVICE_HOST) {
    process.env['MAP_SERVICE_SERVICE_HOST'] = '35.228.12.13';
}

module.exports = {
    municipality: {
        async retrieve(userId) {
            return await services.fetch.get('map', 'municipality', {}, userId);
        },
    },
};
