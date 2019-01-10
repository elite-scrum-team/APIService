
const auth = require('../util/auth');

module.exports = async (req, res, next) => {
    const headers = req.header('Authorization'); 

    if (headers === undefined) {
        req._user = undefined;
        next();
        return;
    }
    
    const split = headers.split(' ');

    if (split.length <= 1) {
        req._user = undefined;
        next();
        return;
    }

    req._user = await auth.validate(split[1]);
    
    next();
};
