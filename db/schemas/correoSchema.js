import mongoose from "mongoose"

const emailSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    lowercase:true,
    index:{unique:true}
  }
})

export const Email = mongoose.model('Email',emailSchema);