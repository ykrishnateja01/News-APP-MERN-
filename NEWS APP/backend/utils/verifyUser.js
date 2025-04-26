import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // Token not present
  // if (!token) {
  //   return next(errorHandler(401, "Access denied. No token provided."));
  // }

  // Token present - verify it
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return next(errorHandler(401, "Token expired. Please log in again."));
      } else if (err.name === "JsonWebTokenError") {
        return next(errorHandler(401, "Invalid token. Authentication failed."));
      }
      return next(errorHandler(401, "Unauthorized"));
    }

    // Attach decoded user to request
    req.user = decodedUser;
    next();
  });
};
