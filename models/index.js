var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/moneta");

module.exports.Todo = require("./todo.js");
module.exports.User = require("./user.js")