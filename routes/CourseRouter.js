const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/CoursesController')

Router.get('/', controller.GetAllCourses)
Router.post('/', controller.CreateCourse)
Router.delete('/:student_id', controller.DeleteCourse)

module.exports = Router
