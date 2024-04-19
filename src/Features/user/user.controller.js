import { signIn, signUp } from "./user.model.js";

// signup controller
export const signUpUser = (req, res, next) => {
  const userData = req.body;

    console.log(userData);

  if (userData) {
    let user = signUp(userData);
    return res.status(201).send({ status: "success", user });
  }
  return res
    .status(400)
    .json({ status: "failure", msg: "Invalid User Details" });
};

// login controller
export const loginUser = (req, res, next) => {
  let status = signIn(req.body);
  if (status) {
    return res.status(201).json({ status: "success", msg: "login successfull" });
  }
  return res.status(400).json({ status: "failure", msg: "No Data exist" });
};
