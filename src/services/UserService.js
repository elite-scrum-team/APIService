const services = require('../util/service.js');

console.log(`user-service: ${process.env.USER_SERVICE_SERVICE_HOST}`);

if (!process.env.USER_SERVICE_SERVICE_HOST) {
    process.env['USER_SERVICE_SERVICE_HOST'] = '35.228.101.13';
}

module.exports = {
    async token(email, password) {
        return await services.fetch.post(
            'user',
            'token',
            {},
            { email: email, password: password }
        );
    },
    async register(user) {
        return await services.fetch.post('user', 'register', {}, user);
    },
};
