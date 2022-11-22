'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Scary Spice',
        email: 'student1@teach.com',
        score: 4,
        letter: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Spice',
        email: 'student2@teach.com',
        score: 3,
        letter: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baby Spice',
        email: 'student3@teach.com',
        score: 2,
        letter: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Posh Spice',
        email: 'student4@teach.com',
        score: 1,
        letter: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bobby Marl',
        email: 'smokey@aol.com',
        score: 1,
        letter: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harley Mcdavid',
        email: '2wheels@aol.com',
        score: 0,
        letter: 'F',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students')
  }
}
