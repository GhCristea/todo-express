const express = require("express");

const router = express.Router();

router.get("/user", function (req, res, next) {
  res.send({ user: "Gogu" });
});

module.exports = router;
