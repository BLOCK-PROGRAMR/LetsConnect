const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        //const isMatch = await user.comparePassword(password);
        const isMatch = await bcrypt.compare(user.password, password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
