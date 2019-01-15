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
                userId
            );
        },
        async retrive(filters, userId) {
            return await services.fetch.get(
                'warning',
                'warning',
                filters,
                null,
                userId
            );
        },
        async retriveOne(id, userId) {
            return await services.fetch.get(
                'warning',
                `warning/${id}`,
                {},
                null,
                userId
            );
        },
        async retrieveContent(id, userId) {
            return await services.fetch.get(
                'warning',
                `warning/${id}`,
                {},
                null,
                userId
            );
        },
    },
    image: {
        async create(data, files, userId) {
            const warningId = data.warningId;
            const image = files && files.length > 0 ? files[0].path : null;

            console.log('FILES: ', files);

            const imageObject = { warningId, image };

            return await services.fetch.post(
                'warning',
                'image',
                {},
                imageObject,
                userId
            );
        },
    },
    category: {
        async retrive(userId) {
            const res = await services.fetch.get(
                'warning',
                'category',
                {},
                null,
                userId
            );
            return res;
        },
    },
    status: {
        async create(statusData, userId) {
            const res = await services.fetch.post(
                'warning',
                'status',
                {},
                statusData,
                userId
            );
            return res;
        },
    },
    content: {
        async retrieve(id, userId) {
            return await services.fetch.get(
                'warning',
                `content/${id}`,
                {},
                null,
                userId
            );
        },
    },
};
