
// contain logic how to connect with Db and connect with DB logic is in server.js

const mongoose=require('mongoose')

async function connectDB(){
   
    // await mean wait until connect serevr with db and add DB name at end
    await mongoose.connect('mongodb+srv://malware:malware9211@backend.hdap3e8.mongodb.net/backend')
    console.log('Connected with DB')
}

module.exports=connectDB
