import mongoose from 'mongoose' //mooooooongoooooooooose
import connection from '../connection.js'
import Bookmark from '../models/Bookmark.js'

import data from '../lib/db/bookmarks.json' assert { type: 'json' }

const bookmarkData = data.map( item => {
    const bookmark = {}
    bookmark.title = item.title
    bookmark.url = item.url
    return bookmark
})

// Bookmark
//     .deleteMany({})
//     .then(() => Bookmark.create(bookmarkData))
//     .then(() => console.log('bookmarks seeded!'))
//     .then(() => mongoose.disconnect())
//     .catch(error => console.error('ERROR: ', error))

let makeMarks = async() => {
    try {
        await Bookmark.deleteMany({})
        await Bookmark.create(bookmarkData)
        console.log('bookmarks seeded!')
        mongoose.connection.close()
    }

    catch (error) {
        console.error('ERROR: ', error)
    }
}

makeMarks()
