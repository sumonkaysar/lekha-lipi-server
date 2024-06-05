const client = require("./config")
const DB = client.db("lekhaLipiDB")

const usersCollection = DB.collection("users")
const blogsCollection = DB.collection("blogs")
const categoriesCollection = DB.collection("categories")

module.exports = {
    usersCollection,
    blogsCollection,
    categoriesCollection,
}