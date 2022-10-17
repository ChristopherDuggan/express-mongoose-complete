import express from 'express'

const app = express()

import connection from './connection.js'
import Bookmark from './models/Bookmark.js'

app.listen(3000, () => console.log('app listening on port 3000'))

app.get('/', function(req, res) {
    Bookmark.find({}).then(bookmarks => res.json(bookmarks))
})
