const jwt = require('jsonwebtoken');

module.exports = {
    async validate(token) {
        try {
            return jwt.verify(token, 'secret');
        } catch (err) {
            console.error(err);
            return undefined;
        }
    },
};
