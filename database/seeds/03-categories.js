
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category_name: 'Health & Fitness'},
        {id: 2, category_name: 'Travel'},
        {id: 3, category_name: 'Work'},
        {id: 4, category_name: 'Learning'},
        {id: 5, category_name: 'Love'}
      ]);
    });
};
