const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the User model
const User = mongoose.model('User', UserSchema);

// Create indexes if needed
User.createIndexes();

module.exports = User;
