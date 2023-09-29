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



module.exports = router;