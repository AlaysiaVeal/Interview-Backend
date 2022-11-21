const { Grades } = require('../models')

const GetAllGrades = async (req, res) => {
  try {
    const grades = await Grades.findAll()
    res.send(grades)
  } catch (error) {
    throw error
  }
}

const CreateGrade = async (req, res) => {
  try {
    let gradeBody = { ...req.body }
    const createdGrade = await Grades.create(gradeBody)
    res.send(createdGrade)
  } catch (error) {
    throw error
  }
}

const UpdateGrade = async (req, res) => {
  try {
    let gradeId = parseInt(req.params.grade_id)
    const updatedGrade = await Grades.update(req.body, {
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
    await Grades.destroy({ where: { id: gradeId } })
    res.send({ message: `Deleted User with an id of ${gradeId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllGrades,
  CreateGrade,
  UpdateGrade,
  DeleteGrade
}
