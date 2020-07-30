const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    email : String,
    password : String,
    authorityid : String
});

module.exports= mongoose.model('atho', userSchema, 'athos');