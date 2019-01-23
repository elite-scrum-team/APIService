const services = require('../util/service.js');

if (!process.env.EVENT_SERVICE_SERVICE_HOST) {
    process.env['EVENT_SERVICE_SERVICE_HOST'] = '35.228.12.13';
}

module.exports = {
    event: {
        async create(event) {
            return await services.fetch.post('event', 'event', {}, event);
        },
        async retrieveByMunicipality(municipalityId) {
            return await services.fetch.get(
                'event',
                'event/municipality/'.concat(municipalityId)
            );
        },
        async retriveOne(id) {
            return await services.fetch.get('event', `event/${id}`, {});
        },

        async update(id, event) {
            return await services.fetch.put('event', `event/${id}`, event);
        },

        async retrieve(filters, userId) {
            return await services.fetch.get('event', 'event', filters, userId);
        },
    },
    image: {
        async create({ eventId, fileURL }) {
            return await services.fetch.post(
                'event',
                'image',
                {},
                { eventId, fileURL }
            );
        },
        async update({ eventId, fileURL }) {
            return await services.fetch.put(
                'event',
                'image',
                {},
                { eventId, fileURL }
            );
        },
    },
    content: {
        async retrieve(id) {
            return await services.fetch.get('event', `content/${id}`, {});
        },
    },
};
