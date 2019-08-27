const router = require('express').Router()

const Categories = require('./categories-model')
const restricted = require('../users/authenticate-middleware')


// GET CATEGORIES

router.get('/', restricted, (req, res) => {
    Categories.getCategories()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})


// POST NEW CATEGORY

router.post('/', restricted, (req, res) => {
    const newCat = req.body

    Categories.addCategory(newCat)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json(error))
})


// DELETE CATEGORY

router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params
    
    Categories.deleteCategory(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error))
})

module.exports = router;