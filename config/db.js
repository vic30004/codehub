const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://project3:project3@codehub-lutjr.mongodb.net/codehub?retryWrites=true&w=majority", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    });
    console.log('MongoDB connected'.cyan.underline)
  } catch (err) {
      console.log(err.message);
      process.exit(1);//exit process with failur
  }
};

module.exports = connectDB