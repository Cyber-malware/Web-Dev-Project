const express = require('express');

const app = express()   // create server



app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})


app.listen(3000)   // start server