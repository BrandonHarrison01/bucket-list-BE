
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users_categories').insert([
        {user_id: 1, category_id: 3},
        {user_id: 2, category_id: 2},
        {user_id: 3, category_id: 1}
      ]);
    });
};
