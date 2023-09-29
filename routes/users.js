const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("user list");


});

router.get("/new", (req, res) => {
    res.send("user new form");


});




router.get("/:id", (req, res) => {//dynamic parameter route always put static route first
    const userID = req.params.id;
    res.send(`get user with id ${userID}`);

});

router.put("/:id", (req, res) => {//dynamic parameter route always put static route first
    const userID = req.params.id;
    res.send(`update user with id ${userID}`);

});

router.delete("/:id", (req, res) => {//dynamic parameter route always put static route first
    const userID = req.params.id;
    res.send(`delete user with id ${userID}`);

});

module.exports = router;