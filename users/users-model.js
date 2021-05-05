const { select } = require('../database/db-config')
const db = require('../database/db-config')

module.exports = {
    addUser,
    getUsers,
    userLogin,
    editUser
}

function addUser(newUser) {
    return db('users')
        .insert(newUser)
}

function userLogin(username) {
    return db('users').where({ username })
}

function getUsers() {
    return db('users').select('username')
}

function editUser(id, newBody) {
    return db('users')
        .where({ id })
        .update(newBody)
        .then(newId => {
            return db('users')
                .where({ id })
                .first()
        })
}
