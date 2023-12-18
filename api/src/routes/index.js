"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));
// token:
router.use("/tokens", require("./token"));

// brand:
// router.use("/brands", require("./brand"));
// category:
router.use("/categories", require("./category"));
// firm:
router.use("/bills", require("./bill"));
// product:
router.use("/products", require("./product"));
// purchase:
// router.use("/purchases", require("./purchase"));
// sale:
// router.use("/sales", require("./sale"));

// document:
router.use("/documents", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
