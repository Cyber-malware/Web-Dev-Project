// start the server


const app=require('./src/app')


app.get('/',(req,res) =>{
    console.log('')
})

app.listen(3000, ()=>{
    console.log('server start at port 3000...')
})