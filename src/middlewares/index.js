// @ts-check
const express = require("express");
const htmlStart = require("./htmlStart");
const htmlEnd = require("./htmlEnd");
const slowApi = require("./slowApi");
const compression = require("compression");

/**
 * 
 * @param {express.Express} app 
 */
const create = (app) => {
  // app.use(compression({
  //   threshold: 0,
  //   level: 1,
  //   memLevel: 1,
  // }));
  app.use(htmlStart); // TTFB対策
  // app.use(slowApi);
  // app.use(htmlEnd);
}

module.exports = create;
