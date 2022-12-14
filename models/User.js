const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
  
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },
  
  password: {
    type: String,
    required: true,
    minLength: 6,
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
  },

  thoughts: [],
        friends: [this]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})


const User = model('User', UserSchema);

module.exports = User;
