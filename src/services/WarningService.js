const services = require('../util/service.js');

if (!process.env.WARNING_SERVICE_SERVICE_HOST) {
    process.env['WARNING_SERVICE_SERVICE_HOST'] = '35.228.80.86';
}

module.exports = {
    warning: {
        async create(warning, userId) {
            return await services.fetch.post(
                'warning',
                'warning',
                {},
                warning,
                '123'
            );
        },
        async retrive(filter, userId) {
            return await services.fetch.get('warning', 'warning', {}, userId);
        },
        async retriveOne(filter, userId) {
            return [];
        },
    },
    image: {
        async create(image) {
            return image;
        },
    },
    category: {
        async retrive(userId) {
            const res = await services.fetch.get(
                'warning',
                'category',
                {},
                userId
            );
            return res;
        },
    },
};
