// @ts-check
const express = require("express");
const os = require("os");

const HTML_START_TEMPLATE = [
  "<!DOCTYPE html>",
  `<html lang="ja">`,
  `<head>`,
  `<meta charset="utf-8">`,
  `<title>厄介なページ</title>`,
  `<style>* { padding: 0; margin: 0 } #wrapper { width: 640px; }`,
  `.box { list-style: none; display: flex; flex-direction: row; flex-wrap: wrap; }`,
  `.box li { width: 50px; height: 50px; border: 1px solid #333; }</style>`,
  `</head>`,
  `<body>`,
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
