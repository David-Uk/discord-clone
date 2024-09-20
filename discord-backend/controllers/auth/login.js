const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(user.email, process.env.SECRET)
            return res.status(201).json({ userId: user._id, email, token, username: user.username })
        }
        else return res.status(400).json({ error: 'Wrong login details' })

    }
    catch (err) {
        return res.status(500).json(err.message)
    }
}

module.exports = login;