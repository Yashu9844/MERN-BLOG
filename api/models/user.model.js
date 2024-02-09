import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true}) // time when the account created and updated so mongodb save the details because we used time satmp


const User = mongoose.model('User',userSchema);

export default User;