
const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const path = require('path')

const dns = require('dns')    // to connect with mongodb altas
dns.setServers(['1.1.1.1', '8.8.8.8'])

const userModel = require('./models/user')    // require the model
const bcrypt = require('bcrypt')
const { hash } = require('crypto')
const jwt = require('jsonwebtoken')
// const user = require('./models/user')


app.set('view engine', "ejs")   // for ejs engine
app.use(express.json())  // to work with farms
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))     //set path for public files
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('index')
})




// create the user with userModel
app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt)
        bcrypt.hash(password, salt, async (err, hash) => {
            // Store hash in your password DB.
            let createuser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({ email }, 'secretkey')   // sign the jwt with email and secret_key
            res.cookie('token', token)   // set the cookie on fronend
            res.send(createuser)
        })

    })

})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    // search if email is present
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send('email or password is incorrect.')   // stop here if email is incorrect

    // console.log(user.password, req.body.password) // see hash and password

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
           
            let token = jwt.sign({email:  user.email }, 'secretkey')   // sign the jwt with email and secret_key
            res.cookie('token', token)   // set the cookie on fronend
            res.send('Login successful')
        }
        else {
            res.send('email or password is incorrect.')
        }
    })
})

app.get('/logout', (req, res) => {
    res.cookie('token', '')
    res.redirect('/')

})

app.listen('3000', (req, res) => {
    console.log('Server is running...')
})