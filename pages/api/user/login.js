import connectDB from "@/db";
import User from "@/models/user_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if(req.method === "POST"){
        connectDB();
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({msg: "Email and Password required."});
        }
        const emailExists = await User.findOne({email});
        if(!emailExists){
            return res.status(400).json({msg: "Please Register first."});
        }
        const passwordMatch = await bcrypt.compareSync(password, emailExists.password);
        if(!passwordMatch){
            return res.status(400).json({msg: "Invalid Credentials."});
        }
        const token = jwt.sign({token:emailExists._id}, 'Code_AR', {expiresIn: "30d"});
        res.status(200).json({msg: "Login Successfully.", token});
    }
}