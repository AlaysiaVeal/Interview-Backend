'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Grade.belongsToMany(models.Student, {
        through: models.Student_course_grade,
        as: 'grades',
        foreignKey: 'gradeId'
      })
    }
  }
  Grade.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      score: DataTypes.INTEGER,
      letter: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Grade',
      tableName: 'grades'
    }
  )
  return Grade
}
