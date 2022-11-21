const { Student_course_grade } = require('../models')

const GetAllInfo = async (req, res) => {
  try {
    const allInfo = await Student_course_grade.findAll()
    res.send(allInfo)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllInfo
}
