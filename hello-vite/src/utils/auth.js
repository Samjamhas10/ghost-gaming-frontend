export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({});
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      name: "Joseph",
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1750116257648-64c9c39dbd8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
  });
};

export const register = (email, password, name, avatar) => {
  return new Promise((resolve, reject) => {
    resolve({});
  });
};
