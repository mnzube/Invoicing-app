const express = require("express");

const user = require("./user/router");

const router = express.Router();



router.use("/api/v1/user", user);

module.exports = router;