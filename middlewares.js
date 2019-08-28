module.exports = {
    validateUser,
}

function validateUser(req, res, next) {
    if (Object.keys(req.body).length <= 0) {
        res.status(400).json({ message: 'missing username and password body' })
    } else if (!req.body.username) {
        res.status(400).json({ message: 'missing username field' })
    } else if (!req.body.password) {
        res.status(400).json({ message: 'missing required password field'})
    } else {
        next()
    }
}