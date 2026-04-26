import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  Email: {
     type: String,
     unique: true,
  },
  password:{
    type: String
  },
  isAdmin: { type: Boolean, default: false }
});

export default mongoose.model("User", userSchema);
