
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://malware9211:malware9211@auth.pi7k6oo.mongodb.net/?appName=usercreation')

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    posts:[{     // post array
        type:mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
})

module.exports=mongoose.model('user',userSchema)