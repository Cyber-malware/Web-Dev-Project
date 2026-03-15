
// import and require the imagekit sdk
const {ImageKit} = require('@imagekit/nodejs')
const dotenv=require('dotenv').config()

const imagekit=new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})



async function uploadFile(buffer){
    
    const result =await imagekit.files.upload({
        // convert buffer to base64 string
        file: buffer.toString('base64'),
        fileName:'image.jpg'
    })


    return result;

}

module.exports = uploadFile