var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mondo_dev');

var TodoSchema = mongoose.Schema({
    title: String,
    start_date: Date,
    end_date: Date,
    completed_date: Date
});

var Todo = mongoose.model('Todo', TodoSchema);
