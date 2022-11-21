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
  StudentCourseGrades.init(
    {
      gradeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'grades',
          key: 'id'
        }
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'student',
          key: 'id'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'StudentCourseGrades',
      tableName: 'student_courses_grades'
    }
  )
  return StudentCourseGrades
}
