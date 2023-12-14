"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/bill:

const permissions = require("../middlewares/permissions");
const bill = require("../controllers/bill");

// URL: /bills

router
  .route("/")
  .get(permissions.isStaff, bill.list)
  .post(permissions.isStaff, bill.create);

router
  .route("/:id")
  .get(permissions.isStaff, bill.read)
  .put(permissions.isStaff, bill.update)
  .patch(permissions.isStaff, bill.update)
  .delete(permissions.isAdmin, bill.delete);

/* ------------------------------------------------------- */
module.exports = router;
