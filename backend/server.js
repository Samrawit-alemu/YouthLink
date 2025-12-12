const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', require('./src/routes/userRoutes'))
app.use('/api/categories', require('./src/routes/categoryRoutes'))

connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

// console.log("MONGO_URL=", process.env.MONGO_URL)