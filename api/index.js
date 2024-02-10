import express from 'express';
import mongoose from 'mongoose'; // Fix the typo here
import dotenv from 'dotenv';
import useRouter from './routes/user.route.js'


dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();




app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
});

app.use('/api/user',useRouter)

  
