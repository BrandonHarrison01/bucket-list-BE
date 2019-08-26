
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'steve', password: '$2a$04$JC5IrfOfjmsnR/YN.YkjQOlFef2wTVcaoZxYGO/Qw/EtsNv2DbDK.'},
        {username: 'bob', password: '$2a$04$JC5IrfOfjmsnR/YN.YkjQOlFef2wTVcaoZxYGO/Qw/EtsNv2DbDK.'},
        {username: 'mike', password: '$2a$04$JC5IrfOfjmsnR/YN.YkjQOlFef2wTVcaoZxYGO/Qw/EtsNv2DbDK.'}
      ]);
    });
};
