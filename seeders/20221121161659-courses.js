'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        name: 'Singing',
        description: 'Learn how to sing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dancing',
        description: 'Learn how to dance.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Counseling',
        description: 'Learn how to get along.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses')
  }
}
