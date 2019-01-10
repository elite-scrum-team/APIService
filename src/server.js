
const express = require('express');
const bodyParser = require('body-parser');

// logging
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

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


const port = process.env.port | 80;

app.listen(port, () => console.log(`listening on port ${port}`));
