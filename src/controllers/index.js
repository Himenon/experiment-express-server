// @ts-check
const express = require("express");
const home = require("./home");
const slow = require("./slow");

/**
 * 
 * @param {express.Express} app 
 */
const create = (app) => {
  app.use("/home", home);
  app.use("/slow", slow);
}

module.exports = create;
