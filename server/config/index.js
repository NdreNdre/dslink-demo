require('dotenv').config()

module.exports = {
    port: process.env.PORT,

    authUsername: process.env.AUTH_USERNAME,
    authPassword: process.env.AUTH_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,

}
