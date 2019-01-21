const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log('USER ID: ', req.userId);
    if (req.userId) {
        next();
    } else {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
};
