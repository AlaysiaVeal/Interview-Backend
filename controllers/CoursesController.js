const { Course } = require('../models')

const GetAllCourses = async (req, res) => {
  try {
    const course = await Course.findAll()
    res.send(course)
  } catch (error) {
    throw error
  }
}
const GetCourseById = async (req, res) => {
  try {
    let courseId = parseInt(req.params.course_id)
    const course = await Course.findAll({
      where: { id: courseId }
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    let courseBody = { ...req.body }
    const createdCourse = await Course.create(courseBody)
    res.send(createdCourse)
  } catch (error) {
    throw error
  }
}

const UpdateCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.course_id)
    const updatedCourse = await Course.update(req.body, {
      where: { id: courseId },
      returning: true
    })
    res.send(updatedCourse)
  } catch (error) {
    throw error
  }
}

const DeleteCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.course_id)
    await Course.destroy({ where: { id: courseId } })
    res.send({ message: `Deleted User with an id of ${courseId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllCourses,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
  GetCourseById
}
