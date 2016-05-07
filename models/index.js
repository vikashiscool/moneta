var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  ("mongodb://localhost/moneta")
                );
// mongoose.connect("mongodb://localhost/moneta");

module.exports.Todo = require("./todo.js");
module.exports.User = require("./user.js")
