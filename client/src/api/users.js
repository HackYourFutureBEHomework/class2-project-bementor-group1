const API_URL = "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${API_URL}/api/user`).then(response => response.json());
};

export const searchUsers = query => {
  return fetch(`${API_URL}/api/user/search?text=${query}`).then(response =>
    response.json()
  );
};
