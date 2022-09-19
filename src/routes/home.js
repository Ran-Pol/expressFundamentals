const { Router } = require("express");

const router = Router();

router.get("/about", (req, res) => {
const title = 'My page made from express 2';
  res.render("index", {title});
});

router.get("/dashboard", (req, res) => {
  res.send("Inside the dashboard!");
});

module.exports = router;
