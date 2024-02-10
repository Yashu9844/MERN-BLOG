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
  
