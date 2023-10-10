const mongoose = require("mongoose");
const Course = require('../models/Course')

class MeController {

    //GET me/stoted-course
    async storedCourse(req, res,next) {
        try {
            const courses = await Course.find({});
        res.render('me/stored-course', { courses: courses.map(c => c.toObject()) })
        } catch (next) {
            
        }
    }
}

module.exports = new MeController