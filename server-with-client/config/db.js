import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongodb Database Connected".bgMagenta.white);
  });
  //await mongoose.connect(`${process.env.MONGO_LOCAL_URI}/doctorapp`);

  await mongoose.connect(process.env.MONGO_LOCAL_URI);
};

export default connectDB;
