// @ts-check
const express = require("express");

/**
 * 5000msかかる処理
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const middleware = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 100);
}

module.exports = middleware;
