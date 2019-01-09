
module.exports = async (req, res, next) => { 
    if (req.internal.isAuthenticated) {
        
    }
    next();
}

