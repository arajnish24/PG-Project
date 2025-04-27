import mongoose from "mongoose";

const URI ="mongodb+srv://arajnish:arajnish5583@pgproject.zknmx0s.mongodb.net/2let";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("DB connected...");
};

export default connectDB;