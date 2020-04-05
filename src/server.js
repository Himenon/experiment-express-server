// @ts-check
const express = require("express");
const controller = require("./controllers");

const SERVER_PORT = 9000;

const createServer = () => {
  const app = express();
  controller(app);
  return app;
};

const server = createServer();
server.listen(SERVER_PORT, () => {
  console.log(`Serve start: http://localhost:${SERVER_PORT}`);
});
