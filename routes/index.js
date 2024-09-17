const express = require("express");
const router = express.Router();

//login/landingPage
//get
router.get("/", (req, res) => {
  res.render("login",{
    layout:'login'
  });
});

// /dashboard
//get
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
