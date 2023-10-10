const mongoose = require("mongoose");
const Course = require('../models/Course')

class SiteController {

    async index(req, res) {
        const courses = await Course.find({});
        res.render('home', { courses: courses.map(c => c.toObject()) })
    }

    //GET news/:slug
    search(req, res) {
        res.send('search')
    }
}

module.exports = new SiteController