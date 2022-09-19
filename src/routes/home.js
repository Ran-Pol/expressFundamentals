const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const title = "My page is made from express";
  res.render("index", {title});
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
