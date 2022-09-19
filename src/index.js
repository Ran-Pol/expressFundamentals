const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Routes Imports
const UserRoutes = require("./routes/user");
const HomeRoutes = require("./routes/home");

// Express Settings
app.set("appName", "Express Course");
app.set("port", 3000);
app.set("case sensitive routing", true);

// Express Middlewares
app.use(express.json());
app.use(morgan("tiny"));

// Express Router()
app.use(HomeRoutes);
app.use(UserRoutes);

// Routes
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
