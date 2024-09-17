const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


dotenv.config({ path: "./config/config.env" });

connectDB()


const app = express();

const PORT = process.env.PORT || 2121;

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
