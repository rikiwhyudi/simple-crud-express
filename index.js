const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routers = require("./routers/route");
const mongoose = require("mongoose");

//initialize mongodb
mongoose.connect("mongodb://localhost:27017/data-student");
mongoose.Promise = global.Promise;

//initialize body parser
app.use(bodyParser.json());

//initialize routers
app.use("/api/v1", routers);

//error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ err: err.message });
});

//start server
app.listen(5000, function () {
  console.log("Express app listening on port 5000!");
});
