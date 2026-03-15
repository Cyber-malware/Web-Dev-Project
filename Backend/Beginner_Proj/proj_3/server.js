
// server started 
const app=require('./src/app')
const connectDB=require('./src/db/db')


// call fun to connect with DB
connectDB()

app.get('/',(req,res)=>{
    console.log('Malware is here...')
})




app.listen(3000,()=>{
    console.log('server start at port 3000...')
})