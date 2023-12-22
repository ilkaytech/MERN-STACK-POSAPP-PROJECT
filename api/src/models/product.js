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
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    brand_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },

    title: {
      type: String,
      // trim: true,
      required: true,
    },
    img: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    // quantity: {
    //     type: Number,
    //     default: 0
    // },
    // stock: {
    //   type: Number,
    //   default: 0,
    // },
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
