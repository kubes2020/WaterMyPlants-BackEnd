
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'user', password: 'password'},
        {id: 2, username: 'user2', password: 'password'},
        {id: 3, username: 'user3', password: 'password'}
      ]);
    });
};
