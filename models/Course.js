const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coures = new Schema({
  name: {type: String ,maxlength:255},
  description: {type: String ,maxlength :500},
  image: {type: String},
  createAt:{type: Date, default: Date.now},
  updateAt:{type: Date, default: Date.now},
});

module.exports = mongoose.model('courses', Coures,);