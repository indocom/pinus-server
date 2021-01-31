'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("samples", [
      { name: "seedtest", value: 1, created_at: new Date(), updated_at: new Date() },
      { name: "qwerty", value: 15, created_at: new Date(), updated_at: new Date() },
      { name: "asdgh", value: 7, created_at: new Date(), updated_at: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("samples", null, {});
  }
};
