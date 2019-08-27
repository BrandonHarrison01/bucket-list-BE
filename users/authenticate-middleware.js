const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        const secret = 'the secret'

        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'bad token' })
            } else {
                // console.log(decodedToken, 'dt')
                req.user = decodedToken
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'need a token' })
    }
}
