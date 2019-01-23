const services = require('../util/service.js');

if (!process.env.INTEREST_GROUP_SERVICE_SERVICE_HOST) {
    process.env['INTEREST_GROUP_SERVICE_SERVICE_HOST'] = '10.166.0.16';
}

module.exports = {
    warning: {
        async subscribe({ warningId, userId }) {
            return await services.fetch.post(
                'INTEREST_GROUP',
                'warning/subscribe',
                {},
                { warningId },
                userId
            );
        },

        async unsubscribe({ warningId, userId }) {
            return await services.fetch.delete(
                'INTEREST_GROUP',
                'warning/unsubscribe',
                {},
                { warningId },
                userId
            );
        },
    },
};
