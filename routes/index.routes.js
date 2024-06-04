const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Welcome to the backend universe!");
});

module.exports = router;
