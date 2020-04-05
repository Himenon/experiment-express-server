// @ts-check
const express = require("express");
const htmlStart = require("./htmlStart");
const slowApi = require("./slowApi");
const compression = require("compression");

/**
 * 
 * @param {express.Express} app 
 */
const create = (app) => {
  app.use(compression({
    threshold: 0,
    level: 1,
    memLevel: 1,
  }));
  // TTFB(time to first byte)対策
  // 真っ先にhtmlのheadタグを返すことでパフォーマンスのスコアを更新する
  app.use("/slow", htmlStart);
  app.use("/slow", slowApi);
}

module.exports = create;
