'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Scary Spice',
        email: 'student1@teach.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Spice',
        email: 'student2@teach.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baby Spice',
        email: 'student3@teach.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Posh Spice',
        email: 'student4@teach.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students')
  }
}
