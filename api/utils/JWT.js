const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

module.exports = {
  generateToken: function(data) {
    const options = {
      expiresIn: '1h',
    };
    console.log({ ...data });
    return jwt.sign({ ...data }, mysecret, options);
  },
};
