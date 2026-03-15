
const express=require('express')
const app=express()
const path=require('path')
const userModel=require('./models/user')
const { createDecipheriv } = require('crypto')


app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/read',(req,res)=>{
    res.render('read')
})

app.post('/create',async (req,res)=>{
    let {name, email, imageurl}=req.body
    let createuser = await userModel.create({
        name,
        email,
        imageurl
    })
    res.send(createuser)

})

app.listen(3000,()=>{
    console.log('server is running...')
})