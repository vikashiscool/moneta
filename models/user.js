var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    local: {
      email: String,
      password: String,
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },

  // name: {
  //   type: String,
  //   required: true
  // },
  // email: {
  //   type: String,
  //   unique: true,
  //   required: true
  // },
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
  },
  todo: [TodoSchema]  
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


//create the model for users and expose it to our app
var User = mongoose.model("User", UserSchema);
module.exports = User;
