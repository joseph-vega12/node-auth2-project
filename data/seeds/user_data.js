
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {name: 'joseph', password: 'joseph1234'}
      ]);
    });
};
