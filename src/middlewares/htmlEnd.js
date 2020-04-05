// @ts-check
const express = require("express");

const HTML_END_TEMPLATE = ["</body>", "</html>"].join("");

/**
 * HTML Headerを送信する
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const middleware = (req, res, next) => {
  res.write(HTML_END_TEMPLATE);
  next();
};

module.exports = middleware;
