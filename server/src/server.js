const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const middleware = require("./middleware/error");
const location = require("./routes/locations");

require("dotenv").config();
require("./db/connection");

const app = express();

app.use(morgan("common"));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/locations", location);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
