import connectDB from "@/db";
import Hostel from "@/models/hostel-model";

export default async function handler(req, res) {
    if (req.method === "GET"){
        connectDB(); 
        const facilities = await Hostel.find({}).distinct("facilities.name");
        res.status(200).json({msg: "success", facilities});
    }
}
