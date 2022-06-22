const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Api is running!!!! jay ranpariya i iove dhara</h1 > ");
});

module.exports = router;
