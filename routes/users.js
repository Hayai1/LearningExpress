const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("user list");


});

router.get("/new", (req, res) => {
    res.send("user new form");


});


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

module.exports = router;