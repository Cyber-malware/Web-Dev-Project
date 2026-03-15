

const http=require('https')

const server = http.createServer(function(req,res){
    res.end('hello world')
})

server.listen(3000,()=>{
    console.log('server is running on port 3000')
})



