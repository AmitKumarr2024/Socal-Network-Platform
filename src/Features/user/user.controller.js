import { getAllUsers, signIn, signUp } from "./user.model.js";
import jwt from "jsonwebtoken";

// signup controller
export const allUser = (req, res) => {
  const allUser = getAllUsers();
  res.status(201).send(allUser);
};


export const signUpUser = (req, res, next) => {
  const { name, email, password } = req.body;
  
  // suppose any user try to not give data then this condition activate.
  const missingFields = [];
  
  // Check if any of the required fields are missing
  if (!name) missingFields.push("Name");
  if (!email) missingFields.push("Email");
  if (!password) missingFields.push("Password");

  if (missingFields.length > 0) {
    return res
      .status(400)
      .send({ status: "failure", msg: `Missing ${missingFields.join(", ")} field , required to continue` });
  }

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
  } else {
    return res
      .status(400)
      .send({ status: "failure", msg: "Invalid User Details" });
  }
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
      .send({ status: "success", msg: "User login successfull", token });
  } else {
    return res.status(400).send({ status: "failure", msg: "No Data exist" });
  }
};
