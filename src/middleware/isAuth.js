module.exports = (req, res, next) => {
    if (req.userId) {
        next();
        return;
    } else {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
};
