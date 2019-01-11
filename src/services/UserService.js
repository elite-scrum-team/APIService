
const services = require('../util/service.js');

console.log(`user-service: ${process.env.USER_SERVICE_URL}`);

if (!process.env.USER_SERVICE_URL) {
    process.env['USER_SERVICE_URL'] = '35.228.85.132';
}

module.exports = {
    async get(email) {
        try {
            const res = await services.fetch('user', 'user',  { payload: { email: email, password: password } });
            return await res.json();
        } catch(err) {
            console.log(err);
            return {
                error: 'Server error'
            }
        }
    },
    async token(email, password) {
        console.log('fetching...');
        try {
            const res = await services.fetch('user', 'user/login',  { payload: { email: email, password: password } });
            return await res.json();
        } catch(err) {
            console.error(err);
            return {
                error: 'Server error',
            }
        }
    },
    async register(user) {
        try {
            const res = await services.fetch('user', 'user/register', { payload: user });
            return await res.json();
        } catch(err) {
            console.error(err);
            return {
                error: 'Server error',
            }
        }
    }
}

