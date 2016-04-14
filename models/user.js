var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  // hash: String,
  // salt: String,
  //RESEARCH PASSWORD INCLUSION IN MODEL -- AUTHENTICATION

  location: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  income: {
    type: Number,
    required: false
  },
  admin: {
    type: Boolean,
    required: true
  todo: [TodoSchema]  
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
