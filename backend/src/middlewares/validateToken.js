const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require ('../config')

const authrequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = jwt.verify(token, TOKEN_SECRET); 
    console.log(user)
    req.user = user; 
    next(); 
  } catch (err) {
    console.error('Token verification error:', err.message); // Log para depuración
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authrequired;
