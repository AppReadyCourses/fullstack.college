import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://fullstackcodes:eXYkSpbo8LyqW1vE@cluster0.smeepws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(process.env.DATA)
    console.log("MongoDB connected");
  } catch (error) {
    console.log('mongo error:',error);
  }
};
//eXYkSpbo8LyqW1vE
export default connectMongoDB;
