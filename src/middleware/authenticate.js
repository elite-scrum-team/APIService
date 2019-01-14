const auth = require('../util/auth');

module.exports = async (req, res, next) => {
    const headers = req.header('Authorization');
    console.log(headers);

    if (headers === undefined) {
        req.userId = null;
        next();
        return;
    }

    const split = headers.split(' ');

    if (split.length <= 1) {
        req.userId = null;
        next();
        return;
    }

    req.userId = await auth.validate(split[1]).id;
    console.log("USERID IN MIDDLEWARE: ", req.userId);

    next();
};
