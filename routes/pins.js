import express from "express";
import Pin from "../models/Pin.js";


// create a pin
const router = express.Router();

router.post("/", async (req, res)=> {
    const newPin = new Pin(req.body);
    console.log(newPin);
    try {
        const savedPin =  await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all pins
router.get("/", async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
});


// module.exports = router;

export default router;