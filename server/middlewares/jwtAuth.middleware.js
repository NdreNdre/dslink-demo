const jwt = require('jsonwebtoken');
const config = require('../config/index')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, config.jwtSecret)
        req.auth = payload
        next()
    } catch (err) {
        return res.status(401).json({
            message: 'Token invalid or expired'
        })
    }
}