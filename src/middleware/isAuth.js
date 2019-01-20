const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.userId) {
        next();
    } else {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
};
