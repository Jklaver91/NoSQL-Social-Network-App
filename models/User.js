const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username is Required',
    trim: true
  },
  password: {
    type: String,
    required: true,
    validate: [(newText) => newText.length <= 6, 'Passwrod is Required'],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const User = model('User', UserSchema);

module.exports = User;
