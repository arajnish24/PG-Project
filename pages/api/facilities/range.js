import connectDB from "@/db";
import Hostel from "@/models/hostel-model";

export default async function handler(req, res) {
    if(req.method === "GET"){
        connectDB();
        const hostels = await Hostel.find({price: {$lte : req.query.price}});
        res.status(200).json({msg: "Range Filter.", hostels});
    }
}
