require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
  .then(() => console.log('connected to database'))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  classes: Array,
});

const User = mongoose.model('User', userSchema);

const addUser = (info) => (
  User.findOneAndUpdate(
    {
      email: info.email,
    },
    {
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      password: info.password,
      classes: info.classes,
    },
    {
      upsert: true,
    },
  ).exec()
);
const updateCurrent = (info) => (
  User.findOneAndUpdate(
    {
      email: info.email,
      firstName: info.firstName,
      lastName: info.lastName,
      // current: {
      //   date: info.date,
      // },
    },
    {
      current: info.current,
    },
    {
      upsert: true,
    },
  ).exec()
);
const retrieveUser = (email) => (
  User.find({ email })
    .exec()
);

module.exports = {
  addUser, retrieveUser, db, updateCurrent,
};
