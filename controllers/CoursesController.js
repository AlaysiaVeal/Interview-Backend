const { Courses } = require('../models')

const GetAllCourses = async (req, res) => {
  try {
    const course = await Courses.findAll()
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    let courseBody = { ...req.body }
    const createdCourse = await Courses.create(courseBody)
    res.send(createdCourse)
  } catch (error) {
    throw error
  }
}

const UpdateCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.course_id)
    const updatedCourse = await Courses.update(req.body, {
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
    await Courses.destroy({ where: { id: courseId } })
    res.send({ message: `Deleted User with an id of ${courseId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllCourses,
  CreateCourse,
  UpdateCourse,
  DeleteCourse
}
