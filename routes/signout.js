const express = require("express");
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

router.get('/', function (req, res) {
    res.clearCookie('user_id');
    res.redirect('/home');
});

module.exports = router;