const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password: await bcrypt.hash(password, 10) });
    console.log(newUser);


    try {
        await newUser.save(); // Save the user first
        res.status(201).json({ message: "User created successfully" }); // Send response after successful save
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle any errors
    }
};
