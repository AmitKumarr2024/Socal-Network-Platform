const Users = [];

let id = 0;

class UserSchema {
  constructor(name, email, password, profileImageUrl) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = ++id;
    this.profileImageUrl = profileImageUrl;
  }
}

// signup
export const signUp = (data) => {
  const { name, email, password, profileImageUrl } = data;

  const signUpUser = new UserSchema(name, email, password, id, profileImageUrl);
  if (profileImageUrl) {
    signUpUser.profileImageUrl = profileImageUrl;
  }
  Users.push(signUpUser);
  return signUpUser;
};

// array of data
signUp({
  id: "1",
  name: "Amit kumar",
  email: "amit@amit.com",
  password: "amit123",
  profileImageUrl:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
});
signUp({
  id: "2",
  name: "sumit kumar",
  email: "sumit@sumit.com",
  password: "sumit12",
  profileImageUrl:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
});
signUp({
  id: "3",
  name: "sohan sharma",
  email: "sohan@sharma.com",
  password: "sohansr",
  profileImageUrl:"https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
});
signUp({
  id: "4",
  name: "hare krishna",
  email: "hare@krishna.com",
  password: "harekrishna",
  profileImageUrl:"https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
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
