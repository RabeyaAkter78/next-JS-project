import mongoose from "mongoose";
// require('dotenv').config();

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to Mongodb');

    } catch (error) {
        console.log('Error Connecting to Mongodb', error);
    }
};