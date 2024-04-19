import { getAllUsers, signIn, signUp } from "./user.model.js";
import jwt from "jsonwebtoken";

// signup controller
export const allUser = (req, res) => {
  const allUser = getAllUsers();
  res.status(201).send(allUser);
};
export const signUpUser = (req, res, next) => {
  const { name, email, password } = req.body;
  
  const newUser = {
    name,
    email,
    password,
    profileImageUrl: req.file.filename,
  };

  if (newUser) {
    let user = signUp(newUser);

    return res
      .status(201)
      .send({ status: "success", msg: "user added successfully", user });
  }
  return res
    .status(400)
    .json({ status: "failure", msg: "Invalid User Details" });
};

// login controller
export const loginUser = (req, res) => {
  let status = signIn(req.body);
  if (status) {
    const token = jwt.sign(
      { userId: status.id, userEmail: status.email },
      "kdYYSIzf5qdiJ3iYjjoGeuXQcyrK64xs",
      { expiresIn: "1h" }
    );
    console.log("token: ", token);
    return res
      .status(201)
      .cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })
      .cookie("userId", status.id, { maxAge: 900000, httpOnly: false })
      .json({ status: "success", msg: "User login successfull", token });
  } else {
    return res.status(400).json({ status: "failure", msg: "No Data exist" });
  }
};
