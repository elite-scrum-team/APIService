const fetch = require('node-fetch');

SERVICE_URL = process.env.USER_SERVICE_URL | '35.228.85.132';


module.exports = {
    async get(email) {
        fetch(`http://${SERVICE_URL}/user/`)
            :wq

    } 
}

