
const express=require('express')
const app=express()
const userModel=require('./models/user')
const postModel=require('./models/post')

app.get('/',(req,res)=>{
    res.send('Hi malware!')
})

app.get('/create',async (req,res)=>{
    let user = await userModel.create({
        username:'malware',
        age:21,
        email:'cyber9211@gmail.com'
    })
    res.send(user)
})

app.get('/post/create',async (req,res)=>{
    let post = await postModel.create({
        postdata:'Hello how are you?',
        user:'69a318bc8abd5bbe7056f37e',
    })
    let user = await userModel.findOne({_id:'69a318bc8abd5bbe7056f37e'})
    user.posts.push(post._id)  //provide the post id to user
    await user.save()

    res.send({post,user})
})

app.listen(4000,()=>{
    console.log('Server is running...')
})