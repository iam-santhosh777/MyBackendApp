const express = require('express');
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");


app.get("/getUserData", (req, res) => {


    // try{
        throw new Error("Something went wrong");
        // Logic of DB call and get user data
        res.send("User Data Sent");
    // }
    // catch(err) {
    //     console.error(err);
    //     res.status(500).send("Internal Server Error");
    // }
    
})

// kind of a wildcard
app.use("/", (err, req, res, next) => {
    if(err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(7777, () => {
    console.log('Listening on port 7777');
})