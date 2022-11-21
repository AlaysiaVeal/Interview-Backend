const { Grade } = require('../models')

const GetAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll()
    res.send(grades)
  } catch (error) {
    throw error
  }
}
const GetGradeByStudentId = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    const student = await Grade.findAll({
      where: { studentId: studentId }
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}
const CreateGrade = async (req, res) => {
  try {
    let gradeBody = { ...req.body }
    const createdGrade = await Grade.create(gradeBody)
    res.send(createdGrade)
  } catch (error) {
    throw error
  }
}

const UpdateGrade = async (req, res) => {
  try {
    let gradeId = parseInt(req.params.grade_id)
    const updatedGrade = await Grade.update(req.body, {
      where: { id: gradeId },
      returning: true
    })
    res.send(updatedGrade)
  } catch (error) {
    throw error
  }
}

const DeleteGrade = async (req, res) => {
  try {
    let gradeId = parseInt(req.params.grade_id)
    await Grade.destroy({ where: { id: gradeId } })
    res.send({ message: `Deleted User with an id of ${gradeId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllGrades,
  CreateGrade,
  UpdateGrade,
  DeleteGrade,
  GetGradeByStudentId
}
