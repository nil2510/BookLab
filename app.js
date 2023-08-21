require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, "public")));

const homeRoute = require("./routes/home");
const signInRoute = require("./routes/signin");
const signUpRoute = require("./routes/signup");
const profileRoute = require("./routes/profile");
const signoutRoute = require("./routes/signout");
const addRoute = require("./routes/add");
const deleteRoute = require("./routes/delete");

app.use("/home", homeRoute);
app.use("/signin", signInRoute);
app.use("/signup", signUpRoute);
app.use("/profile", profileRoute);
app.use("/signout", signoutRoute);
app.use("/add", addRoute);
app.use("/delete", deleteRoute);

app.listen(process.env.APP_PORT);