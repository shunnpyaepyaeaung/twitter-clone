const express = require('express');
const app = express();
const colors = require('colors');
const port = 3001;
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const path = require('path');
const mongoose = require('./database');
const session = require('express-session');

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`.rainbow)
})

app.set("view engine", "pug");
app.set("views", "pages");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}))

//Routes
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');

app.use('/login',loginRoute);
app.use('/register',registerRoute);

app.get('/', middleware.requireLogin,(req, res, next) => {
    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user
    }
    res.status(200).render('home',  payload);
})