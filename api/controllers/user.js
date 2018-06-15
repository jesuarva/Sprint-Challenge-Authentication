const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('../utils/JWT');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(user => {
      console.log('user', user);
      const token = jwt.generateToken({ username: user.username });
      res.status(201).json({ token });
    })
    .catch(e => {
      console.log('error', e);
      res.status(400).json(e);
    });
};

module.exports = {
  createUser,
};
