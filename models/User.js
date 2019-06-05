const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please supply a name',
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [
      validator.isEmail,
      'Invalid email', // Error message
    ],
    required: 'Please supply an email address',
  },
  password: {
    type: String,
    required: 'Please supply a password',
  },
});

// Change ugly errors into nice versions
userSchema.plugin(mongodbErrorHandler);

const User = (module.exports = mongoose.model('User', userSchema));
