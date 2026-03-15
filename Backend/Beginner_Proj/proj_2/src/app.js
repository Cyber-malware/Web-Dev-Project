// create the server

const express = require('express')



const app=express()
app.use(express.json())     //this middleware add capacity to express to read body data

const notes=[]       //array to stores notes (objects)

app.post('/notes',(req,res)=>{
    notes.push(req.body)

    // send in json format 
    res.status(201).json({
        message:'notes created successfully'
    })
})

// send notes on get request 
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:'notes fetched successfully',
        notes:notes
    })
})

// Delete the /notes:index using : express know its dynamic parameter
app.delete('/notes/:index',(req,res)=>{

    const index= req.params.index
    delete notes[ index ]

    res.status(200).json({
        message: "notes deleted successfully"
    })
})

// update the description
app.patch('/notes/:index',(req,res)=>{
    const index=req.params.index
    const description=req.body.description

    notes[index].description=description

    res.status(200).json({
        message:"data update successfully"
    })

})


module.exports = app    //export in app.js file