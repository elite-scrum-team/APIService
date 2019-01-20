const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// logging
const morgan = require('morgan');

// prometious logging
const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;

// Probe every 5th second.
collectDefaultMetrics({ timeout: 5000 });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
    morgan('dev', {
        skip: (req, res) => req.path === '/metrics',
    })
);

// Adding cors middleware

app.use(require('./middleware/authenticate.js'));

// routers
app.use('/api/v1/auth', require('./routers/auth'));
app.use('/api/v1/warning', require('./routers/warning.js'));
app.use('/api/v1/user', require('./routers/user.js'));
app.use('/api/v1/location', require('./routers/location.js'));
app.use('/api/v1/event', require('./routers/event.js'));

// get ui
app.get('/', async (req, res) => {
    await res.send({
        message: 'UI will be on this url :)',
    });
});

// send metrics

app.get('/metrics', async (req, res) => {
    await res.set('Content-Type', client.register.contentType);
    await res.end(client.register.metrics());
});

app.use((req, res) => {
    res.status(404).send({ error: 'Not found' });
});

const port = process.env.port || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
