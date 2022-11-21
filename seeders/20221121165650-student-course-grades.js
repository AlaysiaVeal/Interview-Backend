'use strict'
const { Student, Grade, Course, sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let student = Student.findOne({
      order: sequelize.random(),
      raw: true
    })
    let grade = Grade.findOne({
      order: sequelize.random(),
      raw: true
    })
    let course = Course.findOne({
      order: sequelize.random(),
      raw: true
    })

    await queryInterface.bulkInsert('student_course_grades', [
      {
        studentId: student.id,
        courseId: course.id,
        gradeId: grade.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student_course_grades')
  }
}
