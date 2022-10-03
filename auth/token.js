const jwt = require("jsonwebtoken");

module.exports = function generateToken(user) {
    console.log(user,'JSON')
  const jwtPayload = {
    subject: user.id,
    email: user.email,
    // department: user.department,
  };
  const jwtSecret = require("./secret.js").jwtSecret;
  const jwtOptions = {
    expiresIn: "1h",
  };
  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
};
