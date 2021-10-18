'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        user_id:1,
        client_name:'demo',
        table:1,
        status:'demo',
        processedAt:new Date (),
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        user_id:2,
        client_name:'demo',
        table:1,
        status:'demo',
        processedAt: new Date (),
        createdAt: new Date (),
        updatedAt: new Date ()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
