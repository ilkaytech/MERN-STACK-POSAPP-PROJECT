"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/bill:

const permissions = require("../middlewares/permissions");
const Bill = require("../controllers/bill");

// URL: /bills

router
  .route("/")
  .get(permissions.isStaff, bill.list)
  .post(permissions.isStaff, bill.create);

router
  .route("/:id")
  .get(permissions.isStaff, bill.read)
  .put(permissions.isAdmin, bill.update)
  .patch(permissions.isAdmin, bill.update)
  .delete(permissions.isAdmin, bill.delete);

/* ------------------------------------------------------- */
module.exports = router;
