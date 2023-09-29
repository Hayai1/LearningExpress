const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get("/", logger, (req, res) => {//runs logger first, then the route handler (just on get requests for this route)
    

    res.render('index', { text1: "Hello World"});
    

});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(3000);