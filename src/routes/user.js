function UserRoutes(app) {
  app.get("/Username", (req, res) => {
    res.send("Username route");
  });

  app.get("/profile", (req, res) => {
    res.send("profile page");
  });
}

module.exports = UserRoutes;
