const bcrypt = require('bcryptjs')
const User = require("../../models/user");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email })
        if (userExists) return res.status(409).json('Email already registered')

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await new User({ username, email, password: hashedPassword }).save()

        return res.status(201).json(newUser)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json('Error occurred. Please try again')
    }
    res.json('Register')
}

module.exports = register;