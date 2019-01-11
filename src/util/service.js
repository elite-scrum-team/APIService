
const fetch = require('node-fetch');

module.exports = {
    async fetch(serviceName, path, data) {
        return await fetch(`http://${process.env[serviceName.toUpperCase() + 'SERVICE_SERVICE_HOST']}/${path}`,
                        { 
                            method: 'POST', 
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data) 
                        });
    },
}
