const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/jwtAuth.middleware');

router.use('/cms', require('./cms/index'));
// router.use('/landing', require(''));


module.exports = router
