const router = require("express").Router();
const Data = require("../models/Data");

router.get("/data", (req, res) => {
  Data.find().then(data => {
    res.json(data);
  });
});

module.exports = router;
