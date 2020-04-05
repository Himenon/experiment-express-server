// @ts-check
const express = require("express");
const os = require("os");

const HTML_START_TEMPLATE = [
  "<!DOCTYPE html>",
  `<html lang="ja">`,
  `<head>`,
  `<meta charset="utf-8">`,
  `<title>厄介なページ</title>`,
  `<link rel="preload" href="/assets/js/react.development.js" as="script">`,
  `<link rel="preload" href="/assets/js/react-dom.development.js" as="script">`,
  `<link rel="preload" href="/assets/js/main.js" as="script">`,
  `<link rel="preload" href="/assets/css/main.css" as="style">`,
  `<script async src="/assets/js/initial.js"></script>`,
  // `<script defer src="/assets/js/react.development.js"></script>`,
  // `<script defer src="/assets/js/react-dom.development.js"></script>`,
  // `<script defer src="/assets/js/main.js"></script>`,
  `<style>* { padding: 0; margin: 0 } #wrapper { width: 640px; }`,
  `.box { list-style: none; display: flex; flex-direction: row; flex-wrap: wrap; }`,
  `.box li { width: 50px; height: 50px; border: 1px solid #333; }</style>`,
  `</head>`,
  `<body>`,
  `<p id="loading">Now loading</p>`,
].join(os.EOL);

/**
 * HTML Headerを送信する
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const middleware = (req, res, next) => {
  res.write(HTML_START_TEMPLATE);
  next();
};

module.exports = middleware;
