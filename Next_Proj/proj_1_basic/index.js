
const express=require('express')
const path = require('path')
const app=express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')  // Set EJS as the view engine
app.use(express.static(path.join(__dirname,'public'))) // get the stitc files from public


// routes
app.get('/',(req,res)=>{
    // render view is ejs so we will not add extension
    res.render('index')  // Render the 'index.ejs' view
})

app.get('/profile/:name',(req,res)=>{
    const name=req.params.name
    res.send(`Welcome, ${name} `)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})