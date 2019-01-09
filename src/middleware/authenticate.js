const validate = require('../helpers/validate');

module.exports = async (req, res, next) => {
    const headers = req.header('Authorization') 
    if (headers && validate.jwt(headers)) {
        req.internal['isAuthenticated'] = true;
    } else {
        req.internal['isAuthenticated'] = true;
    }
    next();
};
