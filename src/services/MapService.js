const services = require('../util/service.js');

console.log(`map-service: ${process.env.MAP_SERVICE_SERVICE_HOST}`);

if (!process.env.MAP_SERVICE_SERVICE_HOST) {
    process.env['MAP_SERVICE_SERVICE_HOST'] = '35.228.20.102';
}

module.exports = {
    municipality: {
        async retrieve(userId) {
            return await services.fetch.get('map', 'municipality', {}, userId);
        },
    },
    location: {
        async close(location, userId) {
            return await services.fetch.get(
                'map',
                `location/close/${location.lat}/${location.lng}`,
                {},
                userId
            );
        },
        async retrieveInfo(location) {
            return await services.fetch.get(
                'map',
                `location/info/${location.lat}/${location.lng}`,
                {}
            );
        },
    },
};
