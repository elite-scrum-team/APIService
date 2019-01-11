
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// logging
const morgan = require('morgan');

// prometious logging
const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;

// Probe every 5th second.
collectDefaultMetrics({ timeout: 5000 });


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Adding cors middleware
app.use(require('./middleware/cors.js'));

app.use(require('./middleware/internal.js'));
app.use(require('./middleware/authenticate.js'));
app.use(require('./middleware/user.js'));

// routers
app.use('/api/auth', require('./routers/auth'));

// get ui
app.get('/', async (req, res) => {
    await res.send({
        message: 'UI will be on this url :)'
    }); 
});

// send metrics 

app.get('/metrics', async (req, res) => {
    await res.set('Content-Type', client.register.contentType)
    await res.end(client.register.metrics())
})

const port = process.env.port || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
