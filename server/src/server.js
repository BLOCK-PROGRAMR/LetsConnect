// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

// app.post("/api/signup", (req, res) => {
//     res.send("hiii hellloo");
// })

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});
