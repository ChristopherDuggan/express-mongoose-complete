import mongoose from 'mongoose'

let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://127.0.0.1:27017/bookmarks', mongooseConfig)

mongoose.connection.on('connected', () => console.log('Connected to database!'))
mongoose.connection.on('disconnected', () => console.log('Disconnected from database!'))
mongoose.connection.on('error', error => console.error('Error! Look out for: ', error))

export default mongoose.connection



