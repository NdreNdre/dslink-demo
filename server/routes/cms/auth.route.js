const express = require('express');
const router = express.Router();
const authController = require('../../modules/cms/auth/auth.controller');
const authMiddleware = require('../../middlewares/jwtAuth.middleware');

router.post('/token', authController.generateJwtToken);
router.post('/register', authMiddleware, authController.registerUser);
router.post('/login', authController.login);

module.exports = router;