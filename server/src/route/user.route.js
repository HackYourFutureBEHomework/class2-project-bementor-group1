const users = require("../controller/user.controller");

module.exports = app => {
  app.get("/api/user", users.findAll);
  app.post("/api/user", users.create);
  app.get("/api/user/search", users.search);
  app.get("/api/user/:id", users.find);
  app.patch("/api/user/:id", users.update);
  app.delete("/api/user/:id", users.delete);
  app.post("/api/user/login", users.login);
};
