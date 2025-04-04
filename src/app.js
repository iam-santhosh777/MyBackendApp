const express = require('express');
const app = express();


// request handler
app.use("/", (req, res)=>{
    res.send("hello from express")
})
app.use("/test", (req, res) => {
    res.send('Hello World which is from santhosh server!');
})



app.use("/hello", (req, res) => {
    res.send("hello hello hello")
})

app.listen(7777, () => {
    console.log('Listening on port 7777');
})