import mongoose from "mongoose";

const rolSchema = new mongoose.Schema({
  rol:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  }
})

export const Rol = mongoose.model('Rol',rolSchema);