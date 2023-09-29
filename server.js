const express = require("express");

const app = express();

app.get("/", (req, res) => {
    

    res.download("./src/coolCats/coolCat1.jpg");
    

});


app.listen(3000);