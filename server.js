const express = require('express');
const connectDB = require('./config/db')
const colors = require('colors')

const app = express();

// connect db 
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server listening on Port ${PORT}`.yellow.bold)
})

