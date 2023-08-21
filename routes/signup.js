const express = require("express");
const router = express.Router();
const cookieParser = require('cookie-parser');
const connection = require('../config/database_connection')

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    res.render('signup', { message: '' });
});

router.post('/', function (req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const selectSql = "SELECT COUNT(*) AS email_count FROM library WHERE mail = ?";
    connection.query(selectSql, [email], function (error, selectResult) {
        if (error) {
            return res.render('signup', { message: 'Internal Server Error' });
        }

        const emailCount = selectResult[0].email_count;
        if (emailCount > 0) {
            return res.render('signup', { message: 'Email Already Exists' });
        } else {
            const insertSql = "INSERT INTO library(id, mail, name, password) VALUES (NULL, ?, ?, ?)";
            connection.query(insertSql, [email, name, password], function (error, insertResult) {
                if (error) {
                    return res.render('signup', { message: 'Internal Server Error' });
                } else {
                    const selectSql = "SELECT id FROM library WHERE mail = ?";
                    connection.query(selectSql, [email], function (error, result) {
                        if (error) {
                            return res.render('signin', { message: 'Internal Server Error' });
                        } else{
                            res.cookie('user_id', result[0].id, { httpOnly: true });
                            return res.redirect('/home');
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;