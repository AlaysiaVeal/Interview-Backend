const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/CoursesController')

Router.get('/', controller.GetAllCourses)
Router.get('/:course_id', controller.GetCourseById)
Router.post('/', controller.CreateCourse)
Router.delete('/:course_id', controller.DeleteCourse)

module.exports = Router
