import mongoose from "mongoose";
const db = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export default db;
