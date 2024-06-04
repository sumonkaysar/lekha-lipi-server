// const { saveUser, updateUser, getOneUser } = require("../controllers/usersController")
// const verifyUser = require("../middlewares/verifyUsers")

const usersRouter = require("express").Router()

usersRouter.get("/", async(req, res)=> {
    res.send({})
} )

// usersRouter.post("/", saveUser)

// usersRouter.get("/:email", verifyUser, getOneUser)

// usersRouter.patch("/:email", verifyUser, updateUser)

module.exports = usersRouter