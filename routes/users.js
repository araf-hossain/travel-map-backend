import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

//register
router.post("/register", async (req, res) => {
  try {
    // generate new password
    const sault = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.pass, sault);
    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // save user and send response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
    try {
        // find user
        const user = await User.findOne({email: req.body.email});
        !user && res.status(400).json("Wrong email and password!");

        // validate pass
        const validPass = await bcrypt.compare(req.body.pass, user.password);
        !validPass && res.status(400).json("Wrong email and password!");

        // send response
        res.status('200').json({id: user.id, username: user.username});
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
