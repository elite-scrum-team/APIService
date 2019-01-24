const services = require('../util/service.js');

if (!process.env.WARNING_SERVICE_SERVICE_HOST) {
    process.env['WARNING_SERVICE_SERVICE_HOST'] = '10.35.250.202';
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
                userId
            );
        },
        async retriveOne(id, userId) {
            return await services.fetch.get(
                'warning',
                `warning/${id}`,
                {},
                userId
            );
        },
        async retrieveContent(id, userId) {
            return await services.fetch.get(
                'warning',
                `warning/${id}`,
                {},
                userId
            );
        },
        async update(id, data, userId) {
            return await services.fetch.put(
                'warning',
                `warning/${id}`,
                {},
                data,
                userId
            );
        },
    },
    image: {
        async create({ warningId, fileURL }, userId) {
            console.log('FILE URL', fileURL);

            return await services.fetch.post(
                'warning',
                'image',
                {},
                { warningId, fileURL },
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
                userId
            );
            return res;
        },

        async retrieveOne(id, userId) {
            return await services.fetch.get(
                'warning',
                `category/${id}`,
                {},
                userId
            );
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
                userId
            );
        },
    },
    contract: {
        async create(contractData, userId) {
            return await services.fetch.post(
                'warning',
                'contract',
                {},
                contractData,
                userId
            );
        },
    },
    comment: {
        async create(commentData, userId) {
            return await services.fetch.post(
                'warning',
                'comment',
                {},
                commentData,
                userId
            );
        },
    },
    statistics: {
        async distribution(query) {
            return await services.fetch.get(
                'warning',
                'statistics/distribution',
                query
            );
        },

        async count(query) {
            return await services.fetch.get(
                'warning',
                'statistics/count',
                query
            );
        },
    },
    score: {
        async getScore(userId) {
            return await services.fetch.get('warning', 'score', {}, userId);
        },
    },
};
