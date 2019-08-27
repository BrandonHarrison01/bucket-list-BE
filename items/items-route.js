const router = require('express').Router()

const Items = require('./items-model')
const restricted = require('../users/authenticate-middleware')


// POST NEW ITEM

router.post('/items', restricted, (req, res) => {
    const newItem = req.body
    const { id } = req.user
    // console.log(newItem, 'new item')

    Items.addItem(newItem, id)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json(error))
})


// GET ALL ITEMS

router.get('/items', restricted, (req, res) => {

    Items.getItems()
        .then(result => {
            result.forEach( result => result.complete ? result.complete = true : result.complete = false )
            result.forEach( result => result.privacy ? result.privacy = "private" : result.privacy = "public" )
            res.status(200).json(result)
        })
        .catch(error => res.status(500).json(error))
})


// GET ITEMS BY USER

router.get('/user-items', restricted, (req, res) => {
    console.log(req.user, 'user')
    const { id } = req.user

    Items.getItemsByUser(id)
        .then(result => {
            result.forEach( result => result.complete ? result.complete = true : result.complete = false )
            result.forEach( result => result.privacy ? result.privacy = "private" : result.privacy = "public" )
            res.status(200).json(result)
        })
        .catch(error => res.status(500).json(error))
})

module.exports = router;
