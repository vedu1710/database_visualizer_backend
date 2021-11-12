const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name : String,
    price : Number,
    details : Array,
    category : String,
    quantity : Number,
    created : {type : Date, default: new Date()}
    
})

const model = mongoose.model('products', schema);

module.exports = model;