const API_URL = "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${API_URL}/user`).then(response => response.json());
};

export const searchUsers = query => {
  return fetch(`${API_URL}/user/search?text=${query}`).then(response =>
    response.json()
  );
};

// for login page

export const loginuser = (fname, lname, email, pword) => {
  return fetch(`${API_URL}/user/login`, {
    method: "POST",
    body: JSON.stringify({
      firstname: fname,
      lastname: lname,
      email: email,
      password: pword
    }),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
};
