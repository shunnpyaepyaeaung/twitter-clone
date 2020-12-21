const express = require('express');
const app = express();
const colors = require('colors');
const port = 3001;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`.rainbow)
})

app.set("view engine", "pug");
app.set("views", "pages");

app.get('/', (req, res, next) => {
    res.status(200).render('home', { title: "Twitter Clone" })
})