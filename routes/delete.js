const express = require("express");
const connection = require('../config/database_connection')
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/:bookId', function (req, res) {
    const arg = req.params.bookId;
    const bookId = arg.slice(0);
    const deleteSql = "DELETE FROM books WHERE book_id = ?";
    connection.query(deleteSql, [bookId], function (error, result) {
        if (error) {
            throw error;
        } else {
            console.log(bookId)
            return res.redirect('/profile');
        }
    });
});

module.exports = router;