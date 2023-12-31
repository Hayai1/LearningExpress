const express = require("express")
const router = express.Router()

router.use(logger)//runs logger on all requests

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("user list")
})

router.get("/new", (req, res) => {
    res.render("users/new")
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({firstName : req.body.firstName})//adds the new user to the array
        res.redirect(`/users/${users.length - 1}`)//redirects to the new user's page
    } else {
        console.log("error")
        res.render("users/new", { firstName: req.body.firstName })//redirects back to the form with the data that was entered
    }
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.params.id)
        res.send(`get user with id ${userID}`)
    })
    .put((req, res) => {
        res.send(`update user with id ${req.params.id}`)   
    })
    .delete((req, res) => {
        res.send(`delete user with id ${req.params.id}`)  
    })

const users = [{name: "John"}, {name: "Jane"}]
router.param("id", (req, res, next, id) => {//runs between the request and the route handler
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router