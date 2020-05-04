// @ts-check
const express = require("express");
const router = express.Router();

const syncHtml = `
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blocking HTML Parse Sample</title>
  <script src="/assets/js/syncHeavyCalculate.js"></script>
  <script src="/assets/js/hello.js"></script>
</head>
<body>
  <h1>同期的に読み込む</h1>
</body>
</html>
`;

const html1 = `
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blocking HTML Parse Sample</title>
  <script async src="/assets/js/syncHeavyCalculate.js"></script>
`;

const html2 = `
<script defer src="/assets/js/hello.js"></script>
</head>
`;

const html3 = `
<body>
  <h1>async slow execute</h1>
</body>
</html>
`;

router.get("/", function (req, res) {
  res.write(`
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <ol>
      <li><a href="/blocking-html-parse/sample1">asyncの付いたscriptタグがHTMLのParseをブッキングするサンプル</a></li>
      <li><a href="/blocking-html-parse/sample1">deferの付いたscriptがasyncのscriptの実行前にParse完了するサンプル</a></li>
      <li><a href="/blocking-html-parse/sample3">scriptタグにオプションをつけないサンプル</a></li>
    </ol>
  </body>
  </html>
  `);
});


router.get("/sample1", function (req, res) {
  res.write(html1);
  setTimeout(() => {
    res.write(html2);
    res.write(html3);
    res.end();
  }, 300); // async-slow-execute-end.jsのダウンロード時間より十分に長い
});

router.get("/sample2", function (req, res) {
  res.write(html1);
  res.write(html2);
  res.write(html3);
  res.end();
});

router.get("/sample3", function (req, res) {
  res.write(syncHtml);
  res.end();
});

module.exports = router;
