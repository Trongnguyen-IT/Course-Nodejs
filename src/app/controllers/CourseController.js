const Course = require('../models/Course')

class CourseController {

    //GET courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('./course', { courses: courses.map(c => c.toObject()) })
        } catch (ex) {
            next(ex)
        }
    }

    //GET course/:slug
    async details(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            //res.send(`course- ${res.json(course.toObject())}`)
            res.render('course/details', { course: course.toObject() })
        } catch (ex) {
            next(ex)
        }
    }

    //GET course/create
    async create(req, res, next) {
        try {
            //const course = await Course.findOne({ slug: req.params.slug });
            //res.send(`course- ${res.json(course.toObject())}`)
            res.render('course/create')
        } catch (ex) {
            next(ex)
        }
    }

    //POST course/store
    async store(req, res, next) {
        try {
            const formInput = req.body

            await Course.create(formInput);
            res.redirect('/')
        } catch (ex) {
            next(ex)
        }
    }

    //GET course/:id/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findOne({ _id: req.params.id });
            res.render('course/edit', { course: course.toObject() })
        } catch (ex) {
            next(ex)
        }
    }

    //PUT course/:id
    async update(req, res, next) {
        try {
            const course = await Course.findOne({ _id: req.params.id });
            await Course.updateOne(course, req.body);
            res.redirect('/me/stored-course')
        } catch (ex) {
            next(ex)
        }
    }
}

module.exports = new CourseController