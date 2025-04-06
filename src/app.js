const express = require('express');
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
    // creating a new instance of the  user model
    const user = new User({
        firstName: "Divyanshu",
        lastName: "Tiwari",
        age: 25,
        emailId: "thisis.santhosh777@gmail.com",
        gender: "male",
        city: "Chennai",
        state: "Tamil Nadu",
        password: "Divya123",
    });

    try{
        await user.save()
        console.log(user);
        res.send("User Created Successfully");
    }
    catch (err) {
        console.error("Failed to create user", err);
    }
})

connectDb().then(()=>{
    console.log("Connected to DB Successfully");
    app.listen(7777, () => {
        console.log('Listening on port 7777');
    })
}).catch((err)=>{
    console.error("Failed to connect to DB", err);
})

