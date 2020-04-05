// @ts-check
const express = require("express");
const router = express.Router();
const path = require("path");

const viewRoot = path.join(__dirname, "../view/home");

router.get('/', function (req, res) {
  res.sendFile(path.join(viewRoot, "index.html"), {});
});

router.get('/about', function (req, res) {
  res.sendFile(path.join(viewRoot, "about.html"), {});
})

module.exports = router;
