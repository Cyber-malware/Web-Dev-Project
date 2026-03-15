

// require the mongoose
const mongoose=require('mongoose');

// define data types
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// create model to perform any CRUD operations related to note 
const noteModel=mongoose.model('note',noteSchema) //add string and note schema

module.exports=noteModel