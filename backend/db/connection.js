const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectionDB = async (database_url) => {
  try {
    const DB_OPTION = {
      dbname: process.env.DB_NAME,
    };
    await mongoose.connect(database_url, DB_OPTION);
    console.log("Connection Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionDB;
