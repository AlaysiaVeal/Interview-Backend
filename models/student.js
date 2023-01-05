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
      Student.belongsToMany(models.Grade, {
        through: models.Student_course_grade,
        as: 'grades',
        foreignKey: 'gradeId'
      })
      Student.belongsToMany(models.Course, {
        through: models.Student_course_grade,
        as: 'courses',
        foreignKey: 'courseId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      score: DataTypes.INTEGER,
      letter: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
