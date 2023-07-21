const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
   const url = process.env.MONGO_URI;
  
    // const url = "mongodb+srv://admin:admin@cluster0.81zengb.mongodb.net/test?"
    const conn = await mongoose.connect(url);
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error1: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;