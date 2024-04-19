const Users = [];

let id = 0;

class UserSchema {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = ++id;
  }
}

// signup
export const signUp = (data) => {
  const { name, email, password } = data;

  const signUpUser = new UserSchema(name, email, password, id);
  Users.push(signUpUser);
  return signUpUser;
};

// array of data
signUp({
  id: "1",
  name: "Amit kumar",
  email: "amit@amit.com",
  password: "amit123",
});
signUp({
  id: "2",
  name: "sumit kumar",
  email: "sumit@sumit.com",
  password: "sumit12",
});
signUp({
  id: "3",
  name: "sohan sharma",
  email: "sohan@sharma.com",
  password: "sohansr",
});
signUp({
  id: "4",
  name: "hare krishna",
  email: "hare@krishna.com",
  password: "harekrishna",
});

// signIn

export const signIn = (data) => {
  const { email, password } = data;
  let isValidUser = false;
  Users.forEach((newUser) => {
    if (newUser.email == email && newUser.password == password) {
      isValidUser = true;
    }
  });
  return isValidUser;
};

export const getAllUsers = () => {
  return Users;
};
