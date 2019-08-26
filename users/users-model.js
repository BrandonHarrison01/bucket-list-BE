const db = require('../database/db-config')

module.exports = {
    addUser,
    getUsers,
    userLogin
}

function addUser(newUser) {
    return db('users').insert(newUser)
}

function userLogin(username) {
    return db('users').where({ username })
}

function getUsers() {
    return db('users')
}
