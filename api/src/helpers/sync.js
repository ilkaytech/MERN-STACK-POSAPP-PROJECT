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

  /* Finished */
  console.log("* Synchronized.");
};
