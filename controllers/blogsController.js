const { ObjectId } = require("mongodb")
const { blogsCollection } = require("../mongoDBConfig/collections")

const getAllBlogs = async (req, res) => {
    const { id } = req.params
    const blogs = await blogsCollection.find({}).toArray()
    res.json(blogs)
}

const getMyBlogs = async (req, res) => {
    const { id } = req.params
    const blog = await blogsCollection.findOne({ _id: ObjectId(id) })
    res.json(blog)
}

const saveBlog = async (req, res) => {
    const blog = req.body
    const result = await blogsCollection.insertOne(blog)
    res.json(result)
}

const getOneBlog = async (req, res) => {
    const { id } = req.params
    const blog = await blogsCollection.findOne({ _id: ObjectId(id) })
    res.json(blog)
}

const updateBlog = async (req, res) => {
    const { id } = req.params
    const updatedInfo = req.body
    const result = await blogsCollection.updateOne({ _id: ObjectId(id) }, { $set: updatedInfo })
    res.json(result)
}

const deleteBlog = async (req, res) => {
    const { id } = req.params
    const result = await blogsCollection.deleteOne({ _id: ObjectId(id) })
    res.json(result)
}

const searchBlogs = async (req, res) => {
    const { name } = req.query
    const blogs = await blogsCollection.updateOne({ name })
    res.json(blogs)
}

module.exports = {
    getAllBlogs,
    getMyBlogs,
    saveBlog,
    getOneBlog,
    updateBlog,
    deleteBlog,
    searchBlogs,
}