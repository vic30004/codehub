const express = require("express");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require('cookie-parser')
// Load env vars
dotenv.config({ path: "./config/config.env" });




// initialize express
const app = express();

// Dev logging middleware n 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cookie parser
app.use(cookieParser())

// connect db
connectDB();

// Log routes 
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.send("API Running"));
// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/forum",require('./routes/api/form'));




// dont put this before routes.
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`.yellow.bold);
});
