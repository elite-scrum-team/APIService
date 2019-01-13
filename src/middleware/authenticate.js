const auth = require('../util/auth');

module.exports = async (req, res, next) => {
    const headers = req.header('Authorization');

    if (headers === undefined) {
        req.user = undefined;
        next();
        return;
    }

    const split = headers.split(' ');

    if (split.length <= 1) {
        req.user = undefined;
        next();
        return;
    }

    req.user = await auth.validate(split[1]);

    next();
};
