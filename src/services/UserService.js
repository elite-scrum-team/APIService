const services = require('../util/service.js');

console.log(`user-service: ${process.env.USER_SERVICE_SERVICE_HOST}`);

if (!process.env.USER_SERVICE_SERVICE_HOST) {
    process.env['USER_SERVICE_SERVICE_HOST'] = '35.228.19.181';
}

module.exports = {
    async token(email, password) {
        return await services.fetch.post(
            'user',
            'user/token',
            {},
            { email: email, password: password }
        );
    },
    async register(user) {
        return await services.fetch.post('user', 'user/register', {}, user);
    },

    async changePassword(userId, password) {
        return await services.fetch.post(
            'user',
            'user/changePassword',
            {},
            { password },
            userId
        );
    },

    async forgotPassword(email) {
        return await services.fetch.post(
            'user',
            'user/forgotcauseimretard',
            {},
            { email },
            ''
        );
    },

    async getUserData(userId) {
        return await services.fetch.get('user', 'user', {}, userId);
    },

    async retrieveGroups(filters, userId) {
        return await services.fetch.get('user', 'group', filters, userId);
    },
};
