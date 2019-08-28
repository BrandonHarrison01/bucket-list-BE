const router = require('express').Router()

const Items = require('./items-model')
const restricted = require('../users/authenticate-middleware')


// MIDDLEWARES

// verify body

function checkBody(req, res, next) {
    if (!req.body.name) {
        res.status(400).json({ message: 'missing required name field' })
    } else if (!req.body.category_id) {
        res.status(400).json({ message: 'missing requires category_id' })
    } else {
        next()
    }
}

// check id

function checkId(req, res, next) {
    const { id } = req.params
    Items.getItemById(id)
        .then(result => {
            if (result) {
                next()
            } else {
                res.status(400).json({ message: 'invalid item id' })
            }
            console.log(result, 'result')})
}


// CREATE NEW ITEM

router.post('/items', restricted, checkBody, (req, res) => {
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

router.get('/item/:id', restricted, checkId, (req, res) => {
    const { id } = req.params

    Items.getItemById(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})

// UPDATE ITEM

router.put('/update-item/:id', restricted, checkId, checkBody, (req, res) => {
    const { id } = req.params
    const newBody = req.body

    Items.editItem(id, newBody)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})


// DELETE ITEM

router.delete('/remove-item/:id', restricted, checkId, (req, res) => {
    const { id } = req.params

    Items.deleteItem(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})

module.exports = router;
