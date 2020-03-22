const router = require("express").Router();
const dataRoute = require("./data");

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/api", dataRoute);

module.exports = router;
