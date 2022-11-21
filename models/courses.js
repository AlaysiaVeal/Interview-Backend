'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: models.Student_course_grade,
        as: 'courses',
        foreignKey: 'courseId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
