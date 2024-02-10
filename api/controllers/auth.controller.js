import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password || username === ''|| email === ''|| password === ''){
       next(errorHandler(400,'All fields required plz'))
    }

    

   const hashedPassword = bcryptjs.hashSync(password,10)



    const newUser = new User({
        username,
        email ,                                          //extra feature to hash the  email in Database
        password:hashedPassword
    })

    try{
        await newUser.save();
    res.json('Successfully singed in')
    }
    catch(error){
   next(error)
    }
}