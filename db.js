import mongoose from "mongoose";

// ****************************************
//     Data Base Connection URI
// ****************************************

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("DB connected...");
};

export default connectDB;