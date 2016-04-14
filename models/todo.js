var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  yumminess: {
    type: String,
    required: true
  }
})

var Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
