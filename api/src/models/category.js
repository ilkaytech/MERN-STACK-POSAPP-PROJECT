"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "name": "Category 1"
}
/* ------------------------------------------------------- */
// Category Model:

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      // required: true,
      // unique: true,
    },
  },
  { collection: "categories", timestamps: true }
);

/* ------------------------------------------------------- */
// FOR REACT PROJECT:
// CategorySchema.pre("init", function (data) {
//   data.id = data._id;
//   data.createds = data.createdAt.toLocaleDateString("tr-tr");
// });
/* ------------------------------------------------------- */
module.exports = mongoose.model("Category", CategorySchema);
