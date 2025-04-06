const express = require('express');
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth)



app.post("/user/login", (req, res) => {
    res.send("User Logged In");
})

app.get("/user/data", userAuth,  (req, res) => {
    res.send("Get All Users");
    next()
})

app.get("/admin/getAllData", (req, res) => {
    res.send("Get All Data");
})
app.get("/admin/deleteUser", ((req, res) => {
    // Logic of checking if the request is authorized
    res.send("User Deleted");
}))

app.listen(7777, () => {
    console.log('Listening on port 7777');
})