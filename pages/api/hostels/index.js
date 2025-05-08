import connectDB from "@/db"
import Hostel from "@/models/hostel-model";


export default async function handler(req, res) {
    connectDB();
    // if (req.method === "POST"){
    //     const newHostel = new Hostel(req.body);
    //     const result = await newHostel.save();
    //     4;
    //     res.status(201).json({msg: "Hostel added.", result});
    // }

    if(req.method === "GET"){
        const hostels = await Hostel.find({location:req.query.city});
        if(hostels.length > 0){
            res.status(200).json({msg: "Good", hostels});
        }
        const allhostels = await Hostel.find({});
        return res.status(200).json({msg: "Good", allhostels});
    }
}