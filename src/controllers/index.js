// @ts-check
const express = require("express");
const blockingHtmlParse = require("./blocking-html-parse");
const home = require("./home");
const slow = require("./slow");
const path = require("path");

/**
 * 
 * @param {express.Express} app 
 */
const create = (app) => {
  app.use("/home", home);
  app.use("/blocking-html-parse", blockingHtmlParse);
  app.use("/slow", slow);
  app.use("/assets", express.static(path.join(__dirname, "../assets/")));
}

module.exports = create;
