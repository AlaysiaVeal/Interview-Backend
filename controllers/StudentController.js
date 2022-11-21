const { Student } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    let studentBody = { ...req.body }
    const createdStudent = await Student.create(studentBody)
    res.send(createdStudent)
  } catch (error) {
    throw error
  }
}
const DeleteStudent = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    await Student.destroy({ where: { id: studentId } })
    res.send({ message: `Deleted User with an id of ${studentId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllStudents,
  CreateStudent,
  DeleteStudent
}
