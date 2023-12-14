"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use("/account/auth", require("./auth"));
// call user.create for /account/register:
const { create: userCreate } = require("../controllers/user");
router.post("/account/register", userCreate);

// user:
router.use("/users", require("./user"));
// token:
router.use("/tokens", require("./token"));

// brand:
// router.use("/pos/brands", require("./brand"));
// category:
router.use("/pos/categories", require("./category"));
// bill:
router.use("/pos/firms", require("./bill"));
// product:
router.use("/pos/products", require("./product"));
// purchase:
// router.use("/pos/purchases", require("./purchase"));
// sale:
// router.use("/pos/sales", require("./sale"));

// document:
router.use("/documents", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
