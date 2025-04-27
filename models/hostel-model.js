import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true, 
        // unique: true
    },
    description: {
        type: String, 
        required: true, 
        trim: true
    },
    banner: {
        type: String, 
        required: true, 
        trim: true
    },
    gallery: 
        [{
            type: String,
        },
    ],
    price: {
        type: Number
    },
    facilities: [
        {
            img: String,
            name: String,
        },
    ],
    location: {
        type: String,
    },

}, {timestamps: true});

export default mongoose.models?.hostel || mongoose.model("hostel", hostelSchema);