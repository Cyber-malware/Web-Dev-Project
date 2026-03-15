
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://malware9211:malware9211@testpractice.9v0obbr.mongodb.net/?appName=malware')



const userSchema=mongoose.Schema({
    imge:String,
    email:String,
    name:String,

})

module.exports = mongoose.model('user',userSchema)