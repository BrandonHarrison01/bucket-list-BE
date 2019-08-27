const router = require('express').Router()

const Items = require('./items-model')
const restricted = require('../users/authenticate-middleware')


router.get('/items', restricted, (req, res) => {
    console.log(req.user, 'user')
    const { id } = req.user

    Items.getItems(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})

module.exports = router;
