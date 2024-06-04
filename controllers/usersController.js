const { usersCollection } = require("../mongoDBConfig/collections")

const saveUser = async (req, res) => {
    const user = req.body
    const result = await usersCollection.insertOne(user)
    res.json(result)
}

const getOneUser = async (req, res) => {
    const { email } = req.params
    const user = await usersCollection.findOne({ email })
    res.json(user)
}

const updateUser = async (req, res) => {
    const { email } = req.params
    const updatedInfo = req.body
    const result = await usersCollection.updateOne({ email }, { $set: updatedInfo })
    res.json(result)
}

module.exports = {
    saveUser,
    getOneUser,
    updateUser,
}