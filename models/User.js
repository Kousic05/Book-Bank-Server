const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    book_id:{
        type: String
    }
});

module.exports = mongoose.model('Users',userSchema);