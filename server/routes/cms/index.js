const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/jwtAuth.middleware');

router.use('/auth', require('./auth.route'));


module.exports = router
