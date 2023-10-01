import mongoose, { mongo } from "mongoose";

const blogschema=new mongoose.Schema({
    title:String,
    content:String
})

const Blog=mongoose.models.blogs ||  mongoose.model('blogs',blogschema)

module.exports=Blog