import mongoose from "mongoose";

const createConncetion=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://imad:imad@cluster0.7iu2s4z.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected!')
    }catch(err){
        console.log('connection error')
    }

}

export default createConncetion;