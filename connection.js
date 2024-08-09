const mongoose = require("mongoose");

const mongoConnect = async(url) => {
    return mongoose.connect(url);
} 

module.exports = mongoConnect;