const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenderSchema = new Schema({
  
    productId:Number,
    NameofRoad:String,
    Nameofwork:String,
    estimate:String,
    tenderfee:String,
    catogory:String
    

});

module.exports = mongoose.model('tender' , tenderSchema , 'tenders');



