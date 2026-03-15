

const mongoose=require('mongoose')

// connect with database
async function connectDB(){
    await mongoose.connect(process.env.MONGOOSE_URI)
    console.log('Db connected')
}

module.exports=connectDB // export to server.js