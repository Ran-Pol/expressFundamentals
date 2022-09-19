const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", (req, res) => {
  const title = "My page is made from express";

  const users = [
    {
      id: 1,
      name: "Ryan",
      lastname: "Perez",
    },
    {
      id: 2,
      name: "Joe",
      lastname: "Mc Millan",
    },
  ];
  res.render("index", { title, isActive: true, users });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
router.get("/post", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.render("post", { posts: response.data });
});

module.exports = router;
