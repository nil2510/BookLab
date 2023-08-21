const express = require("express");
const connection = require('../config/database_connection')
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    const userid = req.cookies.user_id;
    const bookName = req.body.book_name;
    const author = req.body.author;

    var sql = "SELECT * FROM library WHERE id = ?;";
    connection.query(sql, [userid], function (error, result) {
        if (error) {
            throw error;
        } else {
            const lib_id = result[0].id;
            const lib_name = result[0].name;

            const insertSql = "INSERT INTO books (book_id, book_name, author, lib_id, lib_name) VALUES (NULL, ?, ?, ?, ?)";
            connection.query(insertSql, [bookName, author, lib_id, lib_name], function (error, result) {
                if (error) {
                    throw error;
                } else {
                    return res.redirect('/profile');
                }
            });
        }
    });
});

module.exports = router;