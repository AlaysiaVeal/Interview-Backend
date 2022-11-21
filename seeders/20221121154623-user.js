'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Teach1',
        email: 'teach1@teach.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Teach2',
        email: 'teach2@teach.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Teach3',
        email: 'teach3@teach.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
}
