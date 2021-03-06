const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');


const UserSchema = new Schema({
  username: { 
      type: String, 
      default: ''
    },
  password: { 
      type: String, 
      default: ''
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('users', UserSchema)
module.exports = User;