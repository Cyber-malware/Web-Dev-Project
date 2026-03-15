
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://malware9211:malware9211@auth.pi7k6oo.mongodb.net/?appName=association')

const userSchema= mongoose.Schema({
    username:{
        // also can be written as
        type:String 
    },
    email:String,
    age:Number,
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        // reference (id belong to) model is post
        ref:'post'
    }
})

module.exports=mongoose.model('user',userSchema)