const Router = require('express').Router()
const CourseRouter = require('./CourseRouter')
const GradeRouter = require('./GradeRouter')
const UserRouter = require('./UserRouter')
const StudentRouter = require('./StudentRouter')
const StudentCourseRouter = require('./StudentCourseRouter')

Router.use('/course', CourseRouter)
Router.use('/grade', GradeRouter)
Router.use('/user', UserRouter)
Router.use('/students', StudentRouter)
Router.use('/allinfo', StudentCourseRouter)

module.exports = Router
