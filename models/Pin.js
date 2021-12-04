import mongoose from "mongoose";


// MongoDB schema 
const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
    },

    long: {
      type: Number,
    }
  }, 
  {timestamps: true}
);


// module.exports = mongoose.model("Pin", PinSchema);

export default mongoose.model("Pin", PinSchema);