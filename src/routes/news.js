const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController')

router.get('/:slug',newsController.details)
router.get('/',newsController.index)

// define the home page route
router.get('/news', (req, res) => {
    res.send('Birds home page')
})


module.exports = router