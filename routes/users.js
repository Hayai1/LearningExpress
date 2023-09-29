const express = require("express");
const router = express.Router();


router.use(logger);//runs logger on all requests

router.get("/", (req, res) => {
    res.send("user list");


});

router.get("/new", (req, res) => {
    res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
    console.log(req.body.firstName);//gave the body in new.ejs a name of firstName and this is how we access it
    res.send("Hi");
})

router.route("/:id")
.get((req, res) => {
    const userID = req.params.id;
    console.log(req.user)
    res.send(`get user with id ${userID}`)
    
})
.put((req, res) => {
    const userID = req.params.id;
    res.send(`update user with id ${userID}`)
    
})
.delete((req, res) => {
    const userID = req.params.id;
    res.send(`delete user with id ${userID}`)
    
});

const users = [{name: "John"}, {name: "Jane"}];

router.param("id", (req, res, next, id) => {//runs between the request and the route handler
    req.user = users[id];

    next();
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;