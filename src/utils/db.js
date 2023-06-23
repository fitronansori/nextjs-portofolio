import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
