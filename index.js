import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pinRoute from "./routes/pins.js";
import userRoute from "./routes/users.js";


const app = express();
dotenv.config();
app.use(express.json()); // so that we can get anything as json format from any request.


// connecting with mongo db. https://cloud.mongodb.com/
mongoose
  .connect(process.env.MONGO_URL, { useNewURlParser: true})
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

// listening this port 
app.listen(8800, () => {
    console.log("Server is running");
});
