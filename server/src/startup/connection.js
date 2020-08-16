const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      `MongoDB Connected : ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log("error: " + err);
  }
};
module.exports = connectDB;
