

// define the schema of image data

const mongoose=require('mongoose')

// define post data 
const postSchema = new mongoose.Schema({
    image:String,
    caption:String,
})


// post mean save data in post collection in mongoDB
const postModel=mongoose.model('post',postSchema)


module.exports=postModel