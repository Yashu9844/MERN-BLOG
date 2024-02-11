import express from 'express';
import mongoose from 'mongoose'; // Fix the typo here
import dotenv from 'dotenv';
import useRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'


dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();


app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
});

app.use('/api/user',useRouter)
app.use('/api/auth',authRouter)
  
app.use((err,req,res,next) =>{
  const statusCode  = err.statusCode  || 500;
  const message = err.message || 'Internal Server Error'
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })

  
})

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' http://localhost:5173");
  next();
});