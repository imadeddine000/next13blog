import mongoose from "mongoose";

const createConncetion=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/nextjsblog')
        console.log('connected!')
    }catch(err){
        console.log('connection error')
    }

}

export default createConncetion;