import mongoose from "mongoose";

// MongoDB schema 
const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      require: true
    },
    lat: {
      type: Number,
      require: true
    }
  },
  { timestamps: true }
);


// module.exports = mongoose.model("Pin", PinSchema);

export default mongoose.model("Pin", PinSchema);