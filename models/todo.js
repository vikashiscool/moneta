var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  item_name: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: true
  },
  user_id: {
    type: Number,
    required: true,
  },
  article_name:{
    type: String,
    required: true
  },
  article_content:{
    type: Text,
    required: true
  }
})

var Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
