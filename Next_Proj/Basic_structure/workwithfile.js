

// we can use write, read, append, copy, rename, unlink (delete) and more

const fs=require('fs')  // import the file system module to work with files

// writing fun name before err is not important but it is a convention to write err as the first parameter in the callback function of fs.writeFile
fs.writeFile('./tmpdir/hello.txt','hi its me malware',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file created successfully')
    }
})

// rename file
fs.rename('./tmpdir/hello.txt','malware.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file renamed successfully')
    }
})

// copy file
fs.copyFile('./tmpdir/malware.txt','copyfile.txt',(err)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log('file copied successfully')
    }
})


// unlink (delete) file
fs.unlink('./tmpdir/tmp', (err)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log('TMP file removed successfully')
    }

})

// rm dir but it must be empty
fs.rmdir('tmpdir',(err)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log('TMP dir removed successfully')
    }
})

// But we can use recursive option to remove non empty dir
fs.rmdir('tmpdir',{recursive:true},(err)=>{
    if (err){
        console.log(err)        
    }   
    else {
        console.log('TMP dir removed successfully using recursive option')
    }
})

// read file using fs and use utf8 to convert raw (binary)  object data into string readable
fs.readFile('/etc/passwd','utf8',(err,data)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log(typeof(data))
    }
})


// read file using fs and use toString() to convert raw (binary)  object data into string readable
fs.readFile('/etc/passwd',(err,data)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log(typeof(data.toString()))
    }
})

