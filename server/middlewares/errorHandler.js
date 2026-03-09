module.exports = (err, req, res, next) => {
    // default values
    let statusCode = err.statusCode || 500
    let message = err.message || 'Internal Server Error'

    // Prisma error handling (penting karena kamu pakai Prisma)
    if (err.code) {
        switch (err.code) {
        case 'P2002': // unique constraint
            statusCode = 409
            message = 'Duplicate data'
            break

        case 'P2025': // record not found
            statusCode = 404
            message = 'Data not found'
            break
        }
    }

    // fetch / external API error
    if (err.name === 'FetchError') {
        statusCode = 502
        message = 'External API failed'
    }

    // // log error (development)
    // if (process.env.NODE_ENV !== 'production') {
        console.error('🔥 ERROR:', err)
    // }

    res.status(statusCode).json({
        success: false,
        message,
    })
}
