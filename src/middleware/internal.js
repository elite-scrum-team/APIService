
module.exports = async (req, res, next) => {
    req.internal = {
        payload: req.body
    };
    next();
}


