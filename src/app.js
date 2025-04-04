const express = require('express');
const app = express();



// this will only handle GET call to /user
// app.get(/a/, (req, res) => {
//     res.send({ name: "santhosh kumar", age: 25 });
//     });


// app.get(/.*fly$/, (req, res) => {
//     res.send({ name: "butterfly", age: 25 });
//     });

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send({ name: "santhosh kumar", age: 25 });
})

// app.post("/user", (req, res) => {
//     // assuming like saving data to database
//     res.send("data successfully saved to database");
//     });

// app.delete("/user", (req, res) => {
//     // assuming like deleting data from database
//     res.send("data successfully deleted from database");
//     });

// app.put("/user", (req, res) => {
//     // assuming like updating data in database
//     res.send("data successfully updated in database");
//     });

// // this will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//     res.send("This is Test Route");
//     });

app.listen(7777, () => {
    console.log('Listening on port 7777');
})