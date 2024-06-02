const { usersCollection } = require("../mongoDBConfig/collections")

const usersRouter = require("express").Router()

usersRouter.get("/", async (req, res) => {
    const users = await usersCollection.find({}).toArray()
    res.send(users)
})

module.exports = usersRouter