
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'steve', password: '1234'},
        {username: 'bob', password: '1234'},
        {username: 'mike', password: '1234'}
      ]);
    });
};
