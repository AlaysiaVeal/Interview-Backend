'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student_course_grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_course_grade.init(
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
      modelName: 'Student_course_grade',
      tableName: 'student_course_grades'
    }
  )
  return Student_course_grade
}
