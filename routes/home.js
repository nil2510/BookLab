const express = require("express");
const path = require('path');
const connection = require('../config/database_connection')
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    var sql = 'SELECT * FROM books';
    connection.query(sql, function (error, result) {
        if (error) {
            throw error;
        } else {
            res.render('home', { data: result.slice(0, 16), user_id: req.cookies.user_id});
        }
    });
});

router.post('/', function (req, res) {
    const searchTerm = req.body.search;

    var sql = 'SELECT * FROM books WHERE book_name LIKE ?';
    connection.query(sql, [`%${searchTerm}%`], function (error, result) {
        if (error) {
            throw error;
        } else {
            res.render('home', { data: result.slice(0, 16), user_id: req.cookies.user_id});
        }
    });
});

module.exports = router;