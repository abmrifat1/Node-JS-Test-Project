const router = require("express").Router();
// user router
router.get("/login", (req, res) => {
  res.send("<h2>please login</h2>");
});

router.get("/singUp", (req, res) => {
  res.send("<h2>please singUp</h2>");
});

module.exports = router;
