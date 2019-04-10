const API_URL = "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${API_URL}/api/user`).then(response => response.json());
};

export const searchUsers = query => {
  return fetch(`${API_URL}/api/user/search?text=${query}`).then(response =>
    response.json()
  );
};

// for login page

export const loginuser = (fname, lname, email, pword) => {
  return fetch(`${API_URL}/api/user/login`, {
    method: "POST",
    body: JSON.stringify({
      firstname: fname,
      lastname: lname,
      email: email,
      password: pword
    }),
    credentials: "include",
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
};

// for registration
export const userRegistration = (
  fname,
  lname,
  email,
  pword,
  bio,
  interest,
  img,
  tagline,
  campus,
  userStatus
) => {
  return fetch(`${API_URL}/api/user/register`, {
    method: "POST",
    body: JSON.stringify({
      firstName: fname,
      lastName: lname,
      email: email,
      password: pword,
      bio: bio,
      interest: interest,
      img: img,
      tagline: tagline,
      campus: campus,
      userStatus: userStatus
    }),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
};
