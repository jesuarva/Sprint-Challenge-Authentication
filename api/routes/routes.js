const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login } = require('../controllers');

/**
 * authO stuff: import needed dependencies and write a 'authCheck' function
 */
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
    jwksUri: 'https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json',
  }),
  // This is the identifier we set when we created the API
  audience: 'https://jesuarva-test.eu.auth0.com/api/v2/',
  issuer: 'jesuarva-test.eu.auth0.com',
  algorithms: ['RS256'],
});

module.exports = server => {
  server.get('/api/jokes', authCheck, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
