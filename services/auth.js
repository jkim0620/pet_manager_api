const jwt = require('jsonwebtoken');

let AuthService = {};

AuthService.restrict = (req, res, next) => {
  // Retrieve the JWT somehow
  // Verify JWT token
  // IF verified, next()
  // IF NOT verified, send 401 status

  if (!req.headers['authorization']) {
    return res
    .status(401)
    .json({error: 'Please provide a valid JWT'});
  }

  const userData = jwt.verify(req.headers['authorization'],
  process.env.SECRET_KEY);

  if (userData) {
    next();
  } else {
    res
    .status(401)
    .json({error: 'Invalid JWT token'});
  }
}

module.exports = AuthService;
