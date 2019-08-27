const db = require('../database/db-config')

module.exports = {
    getItems,
}

function getItems(id) {
    return db('items as i')
        .innerJoin('categories as c', 'i.category_id', '=', 'c.id')
        .where('i.user_id', id)
}