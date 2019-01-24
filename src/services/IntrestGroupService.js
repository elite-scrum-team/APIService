const services = require('../util/service.js');

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
