class NewsController {
    index(req, res) {
        res.render('news')
    }

    //GET news/:slug
    details(req,res){
        res.send('details')
    }
}

module.exports = new NewsController