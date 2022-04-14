import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstName: 'string',
  email: {
    type: String,
    required: true
  },
  lastName: 'string',
  phone: 'string',
  username: {
    type: String,
    required: true,
    unique: true
  },
});
const Client = mongoose.model("Client", schema);
export default Client;
