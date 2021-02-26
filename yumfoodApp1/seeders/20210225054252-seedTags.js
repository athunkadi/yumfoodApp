'use strict';
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./tags.json', 'utf-8'));

const dataTag = [];

data.forEach(element => {
  let newData = {
    name: element.name,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  dataTag.push(newData);

});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('tags', dataTag, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tags', null, {});
  }
};
