import connectDB from "@/db";
import Hostel from "@/models/hostel-model";

export default async function handler(req, res) {
    if(req.method == "GET"){
        connectDB();
        const key = req.query.val;
        const hostels = await (
            await Hostel.find({"facilities.name": {$in: key}})
        );
        res.status(200).json({msg: "All Good",hostels});
    }
}
