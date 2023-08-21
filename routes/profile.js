const express = require("express");
const connection = require('../config/database_connection')
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    const userid = req.cookies.user_id;
    var sql = "SELECT * FROM books WHERE lib_id = ?;";
    connection.query(sql, [userid], function (error, result) {
        if (error) {
            throw error;
        } else {
            res.render('profile', { data: result, user_id: userid });
        }
    });
});

module.exports = router;