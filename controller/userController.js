import User from "../model/userModel.js"

export const getUser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.json(err)
    }
}

export const register = async (req, res) => {
    try {
        const user = await User.findOne({ phone: req.body.phone })
        if (user) return res.json("شماره تلفن تکراری.")
        const newUser = new User(req.body)
        const save = await newUser.save()

        res.json(save)
    } catch (err) {
        res.json(err)
    }
}