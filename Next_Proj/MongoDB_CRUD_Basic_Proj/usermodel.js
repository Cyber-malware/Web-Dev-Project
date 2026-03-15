
const mongoose=require('mongoose')

mongoose.connect(`mongodb+srv://malware9211:malware9211@testpractice.9v0obbr.mongodb.net/?appName=tmp`)

// create the schema that what kind of data will be saved
const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String
})

// create and export model to work in other file to perform CRUD operation
module.exports = mongoose.model('user',userSchema)  // plurize name of model will be created like(user to users)
