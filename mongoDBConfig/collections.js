const client = require("./config")
const DB = client.db("server1")

const usersCollection = DB.collection("users")

module.exports = {
    usersCollection,
}