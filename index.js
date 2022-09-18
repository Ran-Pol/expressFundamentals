const express = require("express");

const app = express();

app.get("/hello/:username", (req, res) => {
  console.log(req.query);
  res.send(`Hello ${req.params.username}`);
});
app.get("/search", (req, res) => {
  if (req.query.q === "baseball") {
    return res.send("Here are the Top 10 dominican players");
  } else {
    return res.send("The overall baseball players");
  }
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`The total sum: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
  console.log(req.params);
  const { username } = req.params;
  if (username === "car") {
    return res.sendFile("./javascript.png", { root: __dirname });
  }
  res.send("The user don't hace access!");
});

app.get("/name/:name/age/:age", (req, res) => {
  const xParams = req.params;
  res.send("Hello");
  console.log(xParams);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
