'use strict'
const { Student, sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let student = Student.findOne({ order: sequelize.random(), raw: true })

    await queryInterface.bulkInsert('grades', {
      studentId: student.id,
      score: 100,
      letter: A,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grades')
  }
}
