const router = require('express').Router()

const Items = require('./items-model')
const restricted = require('../users/authenticate-middleware')


// CREATE NEW ITEM

router.post('/items', restricted, (req, res) => {
    const newItem = req.body
    const { id } = req.user
    // console.log(newItem, 'new item')

    Items.addItem(newItem, id)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json(error))
})


// READ ALL ITEMS

router.get('/items', restricted, (req, res) => {

    Items.getItems()
        .then(result => {
            result.forEach( result => result.complete ? result.complete = true : result.complete = false )
            result.forEach( result => result.privacy ? result.privacy = "private" : result.privacy = "public" )
            res.status(200).json(result)
        })
        .catch(error => res.status(500).json(error))
})


// READ ITEMS BY USER

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


// READ ITEM BY ID

router.get('/item/:id', restricted, (req, res) => {
    const { id } = req.params

    Items.getItemById(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})

// UPDATE ITEM

router.put('/update-item/:id', restricted, (req, res) => {
    const { id } = req.params
    const newBody = req.body

    Items.editItem(id, newBody)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})


// DELETE ITEM

router.delete('/remove-item/:id', restricted, (req, res) => {
    const { id } = req.params

    Items.deleteItem(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})

module.exports = router;
