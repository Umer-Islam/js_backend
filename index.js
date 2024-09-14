const express = require("express");
require("dotenv").config();
const app = express();

let PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>it works........&&</h1>");
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
 });
