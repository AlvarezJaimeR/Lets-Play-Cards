const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

//get all users
router.get("/", async (req, res) => {
    try{
        const users = await User.find();
        return res.send(users);
    }  catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//register new user
router.post("/", async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email});
        if (user) return res.status(400).send("User already registered");

        user = new User ({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })

        await user.save();
        
        return res
        .send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;