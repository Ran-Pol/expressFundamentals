const { Router } = require("express");

const router = Router();
router.get("/user", (req, res) => {
  res.render("user");
});

module.exports = router;
