const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected Sucessfully");
  } catch (error) {
    console.log("DB not Connected", error);
  }
};

module.exports = dbconnect;
