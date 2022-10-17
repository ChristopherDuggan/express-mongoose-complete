import mongoose from 'mongoose'

let bookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})

let Bookmark = mongoose.model('Bookmark' , bookmarkSchema)

export default Bookmark
