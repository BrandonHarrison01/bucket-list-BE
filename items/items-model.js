const db = require('../database/db-config')

module.exports = {
    getItems,
    getItemsByUser,
    addItem,
}

function getItems() {
    return db('items as i')
        .innerJoin('categories as c', 'i.category_id', '=', 'c.id')
}

function getItemsByUser(id) {
    return db('items as i')
        .innerJoin('categories as c', 'i.category_id', '=', 'c.id')
        .where('i.user_id', id)
}

function addItem(newItem, id) {
    newItem = ({...newItem, user_id: id})
    return db('items')
        .insert(newItem)
        .then(res => getItemsByUser(id))
}
