const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    

    res.render('index', { text1: "Hello World", text2: "Hello World 2"});
    

});


app.listen(3000);