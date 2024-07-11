const mongoose = require("mongoose");

async function connection (url){
    mongoose.connect(url);
}



module.exports={
    connection
}