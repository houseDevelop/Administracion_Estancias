import mongoose from "mongoose";

const telefonoSchema=new mongoose.Schema({
  lada:{
    type:String,
    required:true
  },
  telefono:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  }
})

export const Telefono = mongoose.model('Telefono',telefonoSchema);