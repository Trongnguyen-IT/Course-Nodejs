const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, default: 'hahaha' },
    slug: { type: String, slug: "name", unique: true },
    description: { type: String, min: 1 },
    image: { type: String, default: 'https://i.ytimg.com/vi/oF7isq9IjZM/maxresdefault.jpg' },
    level: { type: String, match: /[a-z]/ }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);