
module.exports = async (req, res, next) => {
    if (req._user) {
        req.internal['user'] = req._user
    }
    console.log(req.internal);
    next();
}

