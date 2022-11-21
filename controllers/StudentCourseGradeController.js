const { StudentCourseGrades } = require('../models')

const GetAllInfo = async (req, res) => {
  try {
    const allInfo = await StudentCourseGrades.findAll()
    res.send(allInfo)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllInfo
}
