require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         // SPY LOG 1: Check if the function starts
//         console.log("1. Attempting to connect to MongoDB...");

//         // SPY LOG 2: Check if the variable exists (Don't log the password!)
//         const url = process.env.MONGO_URL;
//         console.log(`2. Using URL: ${url ? "Found (Starts with " + url.substring(0, 10) + ")" : "UNDEFINED"}`);

//         if (!url) {
//             throw new Error("MONGO_URL is missing in .env file");
//         }

//         await mongoose.connect(url);

//         console.log('3. ✅ MongoDB Connected...');
//     } catch (err) {
//         console.error('❌ Connection Failed:', err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;