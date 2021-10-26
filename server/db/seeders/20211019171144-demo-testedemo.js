'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TesteDemos', [
      {
        dia:19,
        mes:'Outubro',
        ano:2021,
        createdAt: new Date (),
        updatedAt: new Date ()
      },
      {
       dia:19,
       mes:'Outubro',
       ano:2021,
       createdAt: new Date (),
       updatedAt: new Date ()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('TesteDemos', null, {}),
};
