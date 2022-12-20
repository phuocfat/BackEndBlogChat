const express = require("express");
const router = express.Router();
const accountService = require("../services/account.service");
/* GET users listing. */
router
  .get("/", function (req, res, next) {
    res.send("respond with a resource");
  })
  .post("/register", async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const resultCreated = await accountService.registerService(
      username,
      password
    );
    if (!resultCreated)
      return res.status(500).json({ message: "Server error!!!" });

    return res.status(200).json({ message: "Account register successful!" });
  })
  .post("/login", async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const isLogin = await accountService.loginService(username, password);
    console.log(isLogin);
    if (!isLogin) {
      return res
        .status(400)
        .json({ code: false, message: "Invalid username or password!!" });
    }
    return res.status(200).json({ code: true, message: "Login successful!" });
  });
module.exports = router;
