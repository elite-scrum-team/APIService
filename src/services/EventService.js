const services = require('../util/service.js');

if (!process.env.EVENT_SERVICE_SERVICE_HOST) {
    process.env['EVENT_SERVICE_SERVICE_HOST'] = '10.166.0.15';
}

module.exports = {
    event: {
        async create(event) {
            return await services.fetch.post('event', 'event', {}, event);
        },
        async retrive(filters) {
            return await services.fetch.get('event', 'event', filters);
        },
        async retriveOne(id) {
            return await services.fetch.get('event', `event/${id}`, {});
        },
        async retrieveContent(id) {
            return await services.fetch.get('event', `event/${id}`, {});
        },
    },
    image: {
        async create({ eventId, fileURL }) {
            console.log('FILE URL', fileURL);

            return await services.fetch.post(
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
