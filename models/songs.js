const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    title: {
        required : true,
        type : String
    },
    artist : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model('Songs', songSchema)