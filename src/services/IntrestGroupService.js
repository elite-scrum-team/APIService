const services = require('../util/service.js');

if (!process.env.INTEREST_GROUP_SERVICE_SERVICE_HOST) {
    process.env['INTEREST_GROUP_SERVICE_SERVICE_HOST'] = '10.166.0.18';
}

module.exports = {
    warning: {
        async subscribe({ warningId, userId }) {
            return await services.fetch.post(
                'interest_group',
                'warning/subscribe',
                {},
                { warningId },
                userId
            );
        },

        async unsubscribe({ warningId, userId }) {
            return await services.fetch.delete(
                'interest_group',
                'warning/unsubscribe',
                {},
                { warningId },
                userId
            );
        },
    },
};
