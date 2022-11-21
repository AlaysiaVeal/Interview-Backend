const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/GradesController')

Router.get('/', controller.GetAllGrades)
Router.post('/', controller.CreateGrade)
Router.get('/:student_id')
Router.delete('/:student_id', controller.DeleteGrade)

module.exports = Router
