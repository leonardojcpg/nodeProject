import jwt from "jsonwebtoken";

const ensureAuthMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      error: "error",
      message: "Missing authorization header",
    });
  }
  token = token.split(" ")[1];

  jwt.verify(token, "8422dbd9f4d4bbc30b6b4d57605da553", (error, decoded) => {
    if (error) {
      return response.status(401).json({
        status: "error",
        message: "Invalid token",
      });
    }
    console.log(decoded);

    const { sub } = decoded;

    request.user = {
      id: sub,
    };
  });
  next();
};

export default ensureAuthMiddleware;
