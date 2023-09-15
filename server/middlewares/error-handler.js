function errorHandler (err, req, res, next) {
    if(err.name === 'SequelizeValidationError' || err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({message: err.errors[0].message});
    } else if(err.name === 'Unauthorized') {
        res.status(401).json({message: 'Unauthorized'});
    } else if(err.name === 'JsonWebTokenError') {
        res.status(401).json({message: 'Invalid token'});
    } else if(err.name === 'Invalid email/password') {
        res.status(404).json({message: 'Invalid email or password'});
    } else if(err.name === 'Not found') {
        res.status(404).json({message: 'Data not found'});
    } else {
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = errorHandler;