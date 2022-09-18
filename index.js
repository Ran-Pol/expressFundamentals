const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello worl!");
});

app.get("/myfiles", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "john",
    lastname: "john",
    adress : "john",
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatu(204);
  });
app.listen(3000);
console.log(`Server on port ${3000}`);
