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
        async retrive(filter) {
            return await services.fetch.get('warning', 'warning', {}, '123');
        },
        async retriveOne(filter) {
            return [];
        },
    },
    image: {
        async create(image) {
            return image;
        },
    },
    category: {
        async retrive() {
            const res = await services.fetch.get(
                'warning',
                'category',
                {},
                '123'
            );
            return res;
        },
    },
};
