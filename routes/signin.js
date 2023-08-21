const express = require("express");
const router = express.Router();
const cookieParser = require('cookie-parser');
const connection = require('../config/database_connection');

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    res.render('signin', { message: '' });
});

router.post('/', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const selectSql = "SELECT id, mail, password FROM library WHERE mail = ?";
    connection.query(selectSql, [email], function (error, result) {
        if (error) {
            return res.render('signin', { message: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.render('signin', { message: 'Email not found' });
        }

        const user = result[0];
        if (user.password === password) {
            res.cookie('user_id', user.id, { httpOnly: true });
            return res.redirect('/home');
        } else {
            return res.render('signin', { message: 'Invalid password' });
        }
    });
});

module.exports = router;
