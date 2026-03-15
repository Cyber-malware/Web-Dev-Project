
const app=require('./src/app')
const connectDB=require('./src/db/db') //require connecDB from db.js

connectDB()  // call the function

app.listen(3000,()=>{  //callback
    console.log('server is running')
})
