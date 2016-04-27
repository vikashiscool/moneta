var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  item_name: String,
  // {
  //   type: String,
  //   required: true
  // },
  checked: Boolean,
  // {
  //   type: Boolean,
  //   required: true
  // },
  user_id: Number,
  // {
  //   type: Number,
  //   required: true,
  // },
  article_title: String,
  // {
  //   type: String,
  //   required: true
  // },
  article_content: String
  // {
  //   type: String,
  //   required: true
  // }
})

var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;


