'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      client_name: {
        type: Sequelize.STRING
      },
      table: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      processedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGxpQGtydXN0eWtyYWIuY29tIiwiaWQiOjE5NDksImlhdCI6MTYzMTI0NDM0MSwiZXhwIjoxNjYyODAxOTQxfQ.ey2HG1ugfXWZpqufoUUNfQOrML7FHBRaBTTvdLOQnns */