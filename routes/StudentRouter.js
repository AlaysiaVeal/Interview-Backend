const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/StudentController')

Router.get('/', controller.GetAllStudents)
Router.get('/details/:student_id', controller.GetStudentById)
Router.post('/', controller.CreateStudent)
Router.delete('/:student_id', controller.DeleteStudent)

module.exports = Router
