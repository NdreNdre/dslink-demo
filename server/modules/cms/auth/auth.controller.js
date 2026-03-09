const authService = require('./auth.services');

exports.generateJwtToken = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password required'
        })
    }

    try {
        const token = authService.generateJwtToken({ username, password })

        return res.json({
            access_token: token,
            token_type: 'Bearer'
        })
    } catch (err) {
        if (err.message === 'INVALID_CREDENTIALS') {
            return res.status(401).json({
                message: 'Invalid username or password'
            })
        }

        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

exports.registerUser = async (req,res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({
                message: 'Username and password required'
            })  
        }

        const result = await authService.registerUser({ username, password })

        return res.status(201).json({
            message: 'User registered',
            data: result
        })
    } catch (err) {
        if (err.message === 'USER_EXISTS') {
            return res.status(409).json({
                message: 'Username already exists'
            })
        }

        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

exports.login = async (req,res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({
                message: 'Username and password required'
            })
        }

        const result = await authService.login({ username, password })

        return res.json({
            message: 'Login success',
            ...result
        })
    } catch (err) {
        if (err.message === 'INVALID_CREDENTIAL') {
            return res.status(401).json({
                message: 'Invalid username or password'
            })
        }

        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}