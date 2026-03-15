

const mongoose =require('mongoose')

mongoose.connect(`mongodb+srv://malware9211:malware9211@auth.pi7k6oo.mongodb.net/?appName=auth`)


const userSchema=mongoose.Schema({
    username: String,
    email:String,
    password:String,
    age: Number
})

module.exports = mongoose.model('user',userSchema)