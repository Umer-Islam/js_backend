import express from "express";
// require("dotenv").config();
const app = express();

let PORT = process.env.PORT || 2121;

let arrOfObj = [
  {
    name: "whatever",
    age: 23,
    BornOnEvenDay: false,
  },
  {
    name: "what",
    age: 33,
    BornOnEvenDay: true,
  },
];
app.get("/", (req, res) => {
  res.send("<h1>it works........&&</h1>");
});
app.get("/hehe", (req, res) => {
  res.send("hehe");
});
app.get("/array", (req, res) => {
  res.send(arrOfObj);
});
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
