import express from "express";
import Pin from "../models/Pin.js";


// create a pin
const router = express.Router();

router.post("/", async (req, res)=> {
    const newPin = new Pin(req.body);
    try {
        const savedPin =  await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all pins


// module.exports = router;

export default router;