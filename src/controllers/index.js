// @ts-check
const express = require("express");
const home = require("./home");

/**
 * 
 * @param {express.Express} app 
 */
const create = (app) => {
  app.use("/home", home);
}

module.exports = create;
