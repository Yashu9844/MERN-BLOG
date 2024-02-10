import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password || username === ''|| email === ''|| password === ''){
        return res.status(400).json({message:'All fileds are required'});
    }

    

   const hashedPassword = bcryptjs.hashSync(password,10)
    const hashedEmail = bcryptjs.hashSync(email,10)


    const newUser = new User({
        username,
        email:hashedEmail  ,                                          //extra feature to hash the  email in Database
        password:hashedPassword
    })

    try{
        await newUser.save();
    res.json('Successfully singed in')
    }
    catch(error){
    res.status(500).json({message:error.message})
    }
}