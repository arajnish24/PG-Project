import connectDB from "@/db";
import Hostel from "@/models/hostel-model";

export default async function handler(req,res){
    if(req.method==="GET"){
        connectDB();
        if(req.query.id){
            const hostel = await Hostel.findById(req.query.id);
            res.status(200).json({msg:"Good" , hostel});
        }
    }
}