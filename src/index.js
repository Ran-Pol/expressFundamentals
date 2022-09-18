const express = require("express");
const morgan = require("morgan");

const app = express();

// Express Settings
app.set("appName", "Express Course");
app.set("port", 3000);
app.set("case sensitive routing", true);

// Express Middlewares
app.use(express.json());
app.use(morgan("tiny"));

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.use((req, res, next) => {
  if (req.query.login === "jordan") {
    next();
  } else {
    res.send("Not authorized page!");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Inside the dashboard!");
});

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
