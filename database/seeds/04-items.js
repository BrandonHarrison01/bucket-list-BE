
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          name: 'rescue a kitten',
          description: 'a description',
          user_id: 2,
          category_id: 1,
          privacy: true,
          target_date: '2020-01-01'
        },
        {
          name: 'jump out of a tree', 
          description: 'a description',
          user_id: 3,
          category_id: 4,
          privacy: false,
          target_date: '2020-01-02'
        },
        {
          name: 'something', 
          description: 'a description',
          user_id: 1,
          category_id: 2,
          privacy: false,
          target_date: '2020-01-03'
        },
        {
          name: 'learn how to code', 
          description: 'a description',
          user_id: 1,
          category_id: 3,
          privacy: false,
          target_date: '2020-01-03'
        },
        {
          name: 'plant a garden', 
          description: 'a description',
          user_id: 2,
          category_id: 4,
          privacy: false,
          target_date: '2020-01-03'
        },
        {
          name: 'win the lottery', 
          description: 'a description',
          user_id: 3,
          category_id: 1,
          privacy: true,
          target_date: '2020-01-03'
        }
      ]);
    });
};
