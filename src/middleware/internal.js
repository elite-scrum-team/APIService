
module.exports = async (req, res, next) => {
    req.internal = {
        method: req.method,
        payload: req.body
    };
    next();
}


