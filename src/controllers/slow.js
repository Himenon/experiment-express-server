// @ts-check
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const os = require("os");
const { finished } = require("stream");

router.get("/", function (req, res) {
  const text = [
    `<ul>`,
    `<li><a href="${req.originalUrl}/stream">stream</a></li>`,
    `<li><a href="${req.originalUrl}/stream">sync</a></li>`,
    `</ul>`,
  ].join("");
  res.write(text);
  res.write("</body></html>");
  res.end();
  console.log("/: end");
});

/**
 * @see http://jxck.hatenablog.com/entry/20111204/1322966453
 * @see https://qiita.com/koshilife/items/634799bb57872ce0a169
 * @see streamの加工: https://yosuke-furukawa.hatenablog.com/entry/2014/12/01/155303
 */
router.get("/stream", function (req, res) {
  const stream = fs.createReadStream(
    path.join(__dirname, "../view/slow/index.html")
  );

  // https://nodejs.org/api/stream.html#stream_stream_finished_stream_options_callback
  finished(stream, (error) => {
    if (error) {
      console.error(error);
    } else {
      res.write(["</body>", "</html>"].join(os.EOL));
      res.end();
      console.info("/stream: end");
    }
  });

  stream.pipe(res);
});

router.get("/sync", function (req, res) {
  const text = fs.readFileSync(
    path.join(__dirname, "../view/slow/index.html"),
    { encoding: "utf-8" }
  );
  res.write(text);
  res.write("</body></html>");
  res.end();
  console.info("/sync: end");
});

module.exports = router;
