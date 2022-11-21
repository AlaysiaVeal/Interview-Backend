'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StudentCourseGrades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student -
    Course -
    Grades.init(
      {
        gradeId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'grades',
            key: 'id'
          }
        },
        studentId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'students',
            key: 'id'
          }
        },
        courseId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'courses',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        modelName: 'student_course_grades'
      }
    )
  return StudentCourseGrades
}
