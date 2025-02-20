import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();





 export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sindhuveerathu:12345@cluster0.ti2ez.mongodb.net/WorkHive_db?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(' MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    console.error(' Full Error Details:', error);
    process.exit(1); // Exit process on failure
  }
};


