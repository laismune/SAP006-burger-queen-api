'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name:'demo',
        email:'demo@demo.com',
        password:'123456',
        role:'demo',
        restaurant:'demo',
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        name:'demo-second',
        email:'demo-second@demo.com',
        password:'123456',
        role:'demo',
        restaurant:'demo',
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
        name:'demo-third',
        email:'demo-third@demo.com',
        password:'123456',
        role:'demo-other',
        restaurant:'demo',
        createdAt: new Date (),
        updatedAt: new Date ()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
