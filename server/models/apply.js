const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applySchema = new Schema({
    email : String,
    phonenumber : Number
});

module.exports = mongoose.model('apply', applySchema, 'applications');