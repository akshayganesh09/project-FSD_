const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roadSchema = new Schema({
  
    productId:Number,
    roadName:String,
    issue:String,
    accidentPornArea:String,
    rateOfAccident:Number,
    complainerName:String,
    phoneNumber:Number,
    imageUrl:String

});

module.exports = mongoose.model('road' , roadSchema , 'roads');
