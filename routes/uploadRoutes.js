const express = require('express');
const app = express();
const bcrypt=require('bcrypt');
const router = express.Router();
const bodyParser = require("body-parser");
const User=require("../schemas/UserSchema");
const path=require("path");

router.get("/images/:path", (req, res, next) => {
    res.sendFile(path.join(__dirname,"../uploads/images/"+req.params.path))
})


module.exports = router;