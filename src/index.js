const path = require('path');
const express = require('express')
var methodOverride = require('method-override')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes');
const db = require('./config/db')

db.connect();

const app = express()
const port = 3000

// override with POST having ?_method=type
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//View engine setup
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//app.use(morgan('combined'))

route(app);



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})