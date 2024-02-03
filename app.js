const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});
app.post('/addBook', function (req, res) {
    let book = {
        author: req.body.author,
        title: req.body.title,
        year: req.body.year
    }
    res.send(book.title + ' submitted successfully!');
});
const server = app.listen(port, function () {
    console.log('Server is running at ', port);
});