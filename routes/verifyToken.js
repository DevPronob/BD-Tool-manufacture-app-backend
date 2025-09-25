const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader, "authheader");

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // get token from "Bearer <token>"
    console.log("Token from headers:", token);

    jwt.verify(token, "shhh", (err, user) => {
      if (err) return res.status(403).json("Token is not valid!");

      console.log("Decoded User:", user);
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

module.exports = { verifyToken };
