const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./startup/connection");

//load env
dotenv.config();

const app = express();
//connect
connectDB();
require("./startup/routes")(app);

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode ON port ${PORT}`.yellow.bold
  )
);
