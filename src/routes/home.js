function HomeRoutes(app) {
  app.get("/about", (req, res) => {
    res.send("about page");
  });

  app.get("/dashboard", (req, res) => {
    res.send("Inside the dashboard!");
  });
}

module.exports = HomeRoutes;
