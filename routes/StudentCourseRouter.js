const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/StudentCourseGradeController')

Router.get('/', controller.GetAllInfo)

module.exports = Router
