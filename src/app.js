const express = require('express');
const app = express();

app.use("/user", (req, res, next) => {
console.log("Logging the first user response");
next();
//res.send("User 1");

}, 
(req, res, next) => {
console.log("Logging the second user response");
//res.send("User 2");
next();
},
(req, res, next) => {
console.log("Logging the third user response");
//res.send("User 3");
next();
},
(req, res, next) => {
console.log("Logging the fourth user response");
//res.send("User 4");
next()
},
(req, res, next) => {
console.log("Logging the fifth user response");
res.send("User 5");
}
)


app.listen(7777, () => {
    console.log('Listening on port 7777');
})