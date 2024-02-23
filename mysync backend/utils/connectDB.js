const mongoose = require("mongoose");

const connectDB =  async () =>{
    try{
        const conn = await mongoose.connect(
            "mongodb+srv://ghanshyamchoudhary9009:RkYqalseX9lKj2Jo@myasyncai.0kccu9p.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log(`mongoDb connected ${conn.connection.host}`);
    }catch (error){
       console.error(`Error connecting to mongoDB is ${error.message}`);
       process.exit(1);
    }
};

module.exports = connectDB;

// RkYqalseX9lKj2Jo