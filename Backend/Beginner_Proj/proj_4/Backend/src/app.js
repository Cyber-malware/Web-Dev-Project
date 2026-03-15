

const express = require('express')
const multer=require('multer')
// import storage code
const uploadFile=require('../services/storage.service')

const postModel=require('./models/post.model')  // save url to db


const app=express()

// use miodleware
// app.use(express.json())   only for raw data json format

const upload = multer({storage:multer.memoryStorage()})

// POST API    
app.post('/create',upload.single('image'), async (req,res)=>{

    console.log(req.body)
    console.log(req.file)

    const result =await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    res.status(201).json({
        message:'Post created successfully',
        post:post
    })
})

// GET API
app.get('/create',async (req,res)=>{

    const posts= await postModel.find()

    res.status(200).json({
        message:'Get request successful',
        posts:posts
    })
})

// app.patch('/create/:index',async (req,res)=>{
    
//         const posts= await postModel.findByIdAndUpdate(req.params.index, req,body.image)

//         res.status(200).json({
//             message:'Patch request successful',
//             posts:posts
//         })
    
// })

module.exports=app