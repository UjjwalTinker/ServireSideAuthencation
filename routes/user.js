const express = require("express");
const router = express.Router();

const { handlesignup, handlelogin, hello } = require("../controllers/user");
const { restrict } = require("../authM");

router.post("/signup", handlesignup);

router.post("/login", handlelogin);

router.post("/home", hello);

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/home", restrict(["NORMAL"]) ,(req, res) => {
  return res.render("home");
});


router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
