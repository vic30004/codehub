const express = require("express");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// initialize express
const app = express();

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

// Dev logging middleware

// dont put this before routes.
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`.yellow.bold);
});
