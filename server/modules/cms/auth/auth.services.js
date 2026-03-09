const jwt = require('jsonwebtoken');
const config = require('../../../config/index')
const prisma = require('../../../db/prisma');
const bcrypt = require('bcrypt')

const generateJwtToken = ({ username, password }) => {
    if (
        username !== config.authUsername ||
        password !== config.authPassword
    ) {
        throw new Error('INVALID_CREDENTIALS')
    }

    const token = jwt.sign(
        {
            role: 'admin',
            system: 'admin'
        },
        config.jwtSecret,
        {
            expiresIn: '12h'
        }
    )

    return token
}

const registerUser = async ({ username, password }) => {
    const existing = await prisma.user.findUnique({
        where:{ username }
    })

    if(existing){
        throw new Error('USER_EXISTS')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            username,
            password:hashedPassword,
            role: 'admin',
        }
    })

    return {
        id: user.id,
        username: user.username
    }
}

const login = async ({ username, password }) => {
    const user = await prisma.user.findUnique({
        where: { 
            username
        }
    })

    if(!user || !user.isActive){
        throw new Error("INVALID_CREDENTIAL");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error("INVALID_CREDENTIAL");
    }

    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    }

    const token = jwt.sign(payload, config.jwtSecret, {
        expiresIn:'1h'
    })

    const decoded = jwt.decode(token);

    return {
        accessToken: token,
        expiresAt: decoded.exp * 1000
    }
}

module.exports = {
    generateJwtToken,
    registerUser,
    login,
}