const mongoose = require("mongoose");


mongoose.connect("mongo://localhost", {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((data)=>{
    console.log(`MongoDb Connected with Server: ${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})