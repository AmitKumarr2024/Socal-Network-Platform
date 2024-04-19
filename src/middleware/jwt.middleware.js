import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const { jwtToken } = req.cookies;
  jwt.verify(jwtToken, "kdYYSIzf5qdiJ3iYjjoGeuXQcyrK64xs", (err, decoded) => {
    if (err) {
      res
        .status(401)
        .json({
          success: false,
          msg: "Require Valid details to continue as Login",
        });
    } else {
      const userPayload = decoded;
      req.userId = userPayload.userId;
      next();
    }
  });
};

export default jwtAuth;
