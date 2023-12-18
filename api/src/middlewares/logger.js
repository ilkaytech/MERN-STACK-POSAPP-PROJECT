"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
// app.use(logger):

const morgan = require("morgan");
const fs = require("node:fs");

// fs.mkdirSync('./logs', { recursive: true })

const now = new Date();
const today = now.toISOString().split("T")[0];

module.exports = morgan("combined", {
  stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
});
