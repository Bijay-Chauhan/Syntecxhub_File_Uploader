require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("");

//user routes
const user_route = require("./routes/userRoute");

app.use("/api", user_route);
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("server is running.");
});
