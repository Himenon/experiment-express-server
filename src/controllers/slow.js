// @ts-check
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get('/', function (req, res) {
  const text = [`<ul>`, `<li><a href="${req.originalUrl}/stream">stream</a></li>`, `<li><a href="${req.originalUrl}/stream">sync</a></li>`, `</ul>`].join("");
  console.log(text);
  res.write(text);
});

router.get('/stream', function (req, res) {
  const stream = fs.createReadStream(path.join(__dirname, "../view/slow/index.html"));
  stream.pipe(res);
});

router.get('/sync', function (req, res) {
  const text = fs.readFileSync(path.join(__dirname, "../view/slow/index.html"), { encoding: "utf-8" });
  res.write(text);
});

module.exports = router;
