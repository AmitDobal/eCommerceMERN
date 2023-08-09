const jwt = require("jsonwebtoken");

const verifyIsLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.access_token; //Cookie parser package is required to read the cookies in express

    if (!token) {
      return res
        .status(403)
        .json({ error: "A token is required for authentication" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decode;
      next();
    } catch (error) {
      res.status(401).json({ error: "Unautorized. Invalid Token" });
    }
  } catch (error) {
    next(error);
  }
};

const verifyIsAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json({ error: "Unautorized. Admin required" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { verifyIsLoggedIn, verifyIsAdmin };
