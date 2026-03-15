

const cookieParser = require('cookie-parser')  // to set cookie
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')     // set bcrypt part
const jwt=require('jsonwebtoken')

app.use(cookieParser())

app.get('/', (req, res) => {
    res.cookie('name', 'malware')   // name cookie with data malware
    res.send("Hello Malware everything done...")

})

// for reading use req and for sending use response
// set cookie part
app.get('/read', (req, res) => {
    console.log(req.cookies)
    res.send("Its read page...")

})

// set bcrypt hash after cookie
app.get('/bcrypt', (req, res) => {

    res.send('Everthing working file...')
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash('password123', salt, (err, hash) => {
            // store hash in password DB
            console.log('')
            console.log('salt is: ', salt)
            console.log('Encrypted password is: ', hash)
        })
    })
    // compare the password
    bcrypt.compare('password123', '$2b$10$jsuKPQNFmwBbupnSzOfrKevgqtlQ2f8o0woQhsgdcYUT.KepaFtFq', (err, result) => {
        console.log(result)
    })
})

// set jwt authentication after bcrypt
app.get('/jwt',(req,res)=>{
    let token = jwt.sign({email:'arslan.pentest@gmail.com'},'secret') //secret added
    res.cookie('token',token)
    res.send('JWT Implemented successfuly...')
})

app.get('/jwttoken',(req,res)=>{
    // res.send('Everything running good...')
    console.log(req.cookies.token)
    let data = jwt.verify(req.cookies.token,'secret')
    console.log(data)
    res.send('Everything is greate.')
})

app.listen('3000', () => {
    console.log('Server is running on port 3000.')
})