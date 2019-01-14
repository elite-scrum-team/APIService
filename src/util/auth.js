
const jwt = require('jsonwebtoken');

module.exports = {
    async validate(token) {
        try {
            const decoded = jwt.verify(token, 'secret');
            console.log("DECODED: ", decoded);
            return decoded;
        } catch(err) {
            return undefined;    
        }
    }
}


