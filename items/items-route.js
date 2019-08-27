const router = require('express').Router()

const Items = require('./items-model')
const restricted = require('../users/authenticate-middleware')


// GET ITEMS

router.get('/items', restricted, (req, res) => {
    console.log(req.user, 'user')
    const { id } = req.user

    Items.getItems(id)
        .then(result => {
            result.forEach( result => result.complete ? result.complete = true : result.complete = false )
            result.forEach( result => result.privacy ? result.privacy = "private" : result.privacy = "public" )
            res.status(200).json(result)
        })
        .catch(error => res.status(500).json(error))
})

module.exports = router;
