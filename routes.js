const blogsRouter = require("./routers/blogsRouter")
const usersRouter = require("./routers/usersRouter")

module.exports = function routes(app) {
    app.use("/users", usersRouter)
    app.use("/blogs", blogsRouter)
}