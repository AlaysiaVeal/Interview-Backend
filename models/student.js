'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(models.Grades, {
        through: models.StudentCourseGrades,
        as: 'grades',
        foreignKey: 'gradeId'
      })
      Student.hasMany(models.Courses, {
        through: models.StudentCourseGrades,
        as: 'courses',
        foreignKey: 'courseId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
