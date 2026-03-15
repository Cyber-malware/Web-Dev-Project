
const express=require('express')
const app=express()

const userModel=require('./usermodel')

// Home Page
app.get('/',(req,res)=>{
    res.send('Hi Malware!')
})

// Create
app.get('/create',async (req,res)=>{  // for Async so async word imp near parent function
    // Asynchronous Operation
    let usercreated = await userModel.create({   // for async await has requirment of async  keyword
        name:'Zulfiqar',
        email:'arslanzulfiqar04@gmail.com',
        username:'malware'
    })
    res.send(usercreated)
})

// Update
app.get('/update' ,async (req,res)=>{
    let userupdate = await userModel.findOneAndUpdate({username:'malware'},{username:'probot'}, {new:true}, {returnDocument: 'after'}) // {findone,update, {new:true}}   and returnDocument: 'after' for findOneAndUpdate is deprecated
    res.send(userupdate)
})

// Read all the users
app.get('/read',async (req,res)=>{
    let usersread= await userModel.find()   //find all users
    res.send(usersread)
})

// Read single user
app.get('/read',async (req,res)=>{
    let userread = await userModel.find({name:'probot'})   //find return always array
    res.send(userread)
})

app.listen(3000,()=>{
    console.log('server is running...')
})