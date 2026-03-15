
// server created
const express = require('express');
const noteModel=require('../models/note.model')

const app =express();


// to get data in body use middleware
app.use(express.json())

// after require note.js
app.post('/notes',async (req,res)=>{
    const data=req.body  // title+description

    // wait until data came
   await noteModel.create({
    title:data.title,
    description:data.description
   })

   res.status(201).json({
        message:'Note created'
   })
})


app.get('/notes',async (req,res)=>{
    
    //fetch data and provide in format of array of object
        const notes=await noteModel.find() 

    // fetch only single note and return null if not exit
    // const notes= await noteModel.findOne({
    //     title:"ma hi a"
    // })

    res.status(200).json({
        message:'Notes fetched successfully',
        notes:notes
    })
})

app.delete('/notes/:id',async (req,res)=>{

    const id=req.params.id

    await noteModel.findOneAndDelete({
        // in db id save with name of _db
        _id:id
    })

    res.status(200).json({
        message:"Note deleted successfully"

    })

})

app.patch('/notes/:id',async(req,res)=>{

    const id=req.params.id
    const description=req.body.description

    await noteModel.findOneAndUpdate({
        // first require on which basic you want to find
        _id:id },{ 
        // second what you wnat to update
        description:description })

    res.status(200).json({
        message:'Note updated successfully'
    })

})



module.exports=app