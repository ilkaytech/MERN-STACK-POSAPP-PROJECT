"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "category_id": "65343222b67e9681f937f203",
    "brand_id": "65343222b67e9681f937f107",
    "name": "Product 1"
}
/* ------------------------------------------------------- */
// Product Model:

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      trim: true,
      required: true,
    },

    // quantity: {
    //     type: Number,
    //     default: 0
    // },
    category: {
      type: String,
      required: true,
    },
  },
  { collection: "products", timestamps: true }
);

/* ------------------------------------------------------- */
// FOR REACT PROJECT:
// ProductSchema.pre("init", function (data) {
//   data.id = data._id;
//   data.createds = data.createdAt.toLocaleDateString("tr-tr");
// });
/* ------------------------------------------------------- */
module.exports = mongoose.model("Product", ProductSchema);
