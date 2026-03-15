
const express=require('express')
const app=express()

// middleware can be implemented in two ways
// 1. application level middleware
// 2. router level middleware

express.use(express.json())  // for parsing application/json (readable json data)
app.use(express.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded (readable for form data )

// application level middleware
// app.use always use function that expect 3 things (req,res,next)
app.use((req,res,next)=>{
    console.log('middleware accept the request...')
    next(); // forwared this request to the next middleware or route handler
})

app.use((req,res,next)=>{
    console.log('middleware again accept the request...')
    // next()
    return next(new Error('Something went wrong!')); // forwared this request to the next middleware or route handler
})

// app.get mean run code for specific request and app.use mean run code for all requests

app.get('/',(req,res)=>{
    res.send('This is from malware to home page....')
    console.log('Hello get route created')
})

// request handler (req,res) is middleware function which is executed when the route is matched
app.get('/about',(req,res)=>{
    res.send('This is from malware to about page....')
    console.log('Hello get route created')
})

// error handler in middleware
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Server Error!')
})

app.listen(3000,()=>{
    console.log('Server is running...')
})




