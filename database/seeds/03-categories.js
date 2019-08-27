
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category_name: 'Health & Fitness'},
        {category_name: 'Travel'},
        {category_name: 'Work'},
        {category_name: 'Learning'},
        {category_name: 'Love'}
      ]);
    });
};
