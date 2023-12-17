"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
// sync():

module.exports = async function () {
  // return null;

  /* REMOVE DATABASE *
  const { mongoose } = require('../configs/dbConnection')
  await mongoose.connection.dropDatabase()
  console.log('- Database and all data DELETED!')
  /* REMOVE DATABASE */

  /* User */
  const User = require("../models/user");
  await User.deleteMany(); // !!! Clear collection.
  await User.create({
    _id: "65343222b67e9681f937f001",
    username: "admin",
    password: "aA?123456",
    email: "admin@site.com",
    first_name: "admin",
    last_name: "admin",
    is_active: true,
    is_staff: true,
    is_superadmin: true,
  });
  await User.create({
    _id: "65343222b67e9681f937f002",
    username: "staff",
    password: "aA?123456",
    email: "staff@site.com",
    first_name: "staff",
    last_name: "staff",
    is_active: true,
    is_staff: true,
    is_superadmin: false,
  });
  await User.create({
    _id: "65343222b67e9681f937f003",
    username: "test",
    password: "aA?123456",
    email: "test@site.com",
    first_name: "test",
    last_name: "test",
    is_active: true,
    is_staff: false,
    is_superadmin: false,
  });

  /* Category */
  const Category = require("../models/category");
  await Category.deleteMany(); // !!! Clear collection.
  await Category.create({
    _id: "65343222b67e9681f937f201",
    name: "Food",
  });
  await Category.create({
    _id: "65343222b67e9681f937f202",
    name: "Drink",
  });
  await Category.create({
    _id: "65343222b67e9681f937f203",
    name: "Jewelery",
  });
  await Category.create({
    _id: "65343222b67e9681f937f204",
    name: "Electronic",
  });

  /* Product */
  const Product = require("../models/product");
  await Product.deleteMany(); // !!! Clear collection.
  await Product.create({
    _id: "65343222b67e9681f937f421",
    name: "Tommy",
    category_id: "65343222b67e9681f937f203",
    brand_id: "65343222b67e9681f937f107",
    stock: 0,
  });
  await Product.create({
    _id: "65343222b67e9681f937f422",
    name: "Link",
    category_id: "65343222b67e9681f937f202",
    brand_id: "65343222b67e9681f937f123",
    stock: 910,
  });
  await Product.create({
    _id: "65343222b67e9681f937f423",
    name: "Cola Turka",
    category_id: "65343222b67e9681f937f202",
    brand_id: "65343222b67e9681f937f123",
    stock: 750,
  });
  await Product.create({
    _id: "65343222b67e9681f937f426",
    name: "Rondo",
    category_id: "65343222b67e9681f937f201",
    brand_id: "65343222b67e9681f937f123",
    stock: 900,
  });
  await Product.create({
    _id: "65343222b67e9681f937f427",
    name: "Iphone 14 Pro",
    category_id: "65343222b67e9681f937f204",
    brand_id: "65343222b67e9681f937f131",
    stock: 0,
  });

  /* Finished */
  console.log("* Synchronized.");
};
