const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    book_id:{
        type: String,
        required: true
    },
    book_name:{
        type: String,
        required: false
    },
    book_img:{
        type: String
    },
    book_auth:{
        type: String,
        required: false
    },
    book_year:{
        type: Number
    }
});

module.exports = mongoose.model('books',bookSchema);