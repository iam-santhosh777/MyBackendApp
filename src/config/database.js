const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://santhosh777:SlsFz2pg9xDyE2Ct@namasthesanthosh.bvxcbb7.mongodb.net/devTinder")
}

module.exports = connectDb


