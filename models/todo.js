var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
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
  article_title: {
    type: String,
    required: true
  },
  article_content: {
    type: String,
    required: true
  }
})

var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;


