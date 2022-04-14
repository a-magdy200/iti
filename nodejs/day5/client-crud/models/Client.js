import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: 'string'
});
const Client = mongoose.model("Client", schema);
export default Client;
