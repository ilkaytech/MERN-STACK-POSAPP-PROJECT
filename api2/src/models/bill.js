"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "name": "Bill 1"
}
/* ------------------------------------------------------- */
// Bill Model:

const BillSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      require: true,
    },
    customerPhoneNumber: {
      type: String,
      require: true,
    },
    paymentMode: {
      type: String,
      require: true,
    },
    cartItems: {
      type: Array,
      require: true,
    },
    subTotal: {
      type: Number,
      require: true,
    },
    tax: {
      type: Number,
      require: true,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
  },
  { collection: "bills", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Bill", BillSchema);
