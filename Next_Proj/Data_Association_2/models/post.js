
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://malware9211:malware9211@auth.pi7k6oo.mongodb.net/?appName=usercreation')

const postSchema = mongoose.Schema({
    user:[{     // user array for ids
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    date:{
        type:Date,
        default: Date.now
    },
    content:String,
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
})

module.exports=mongoose.model('post',postSchema)