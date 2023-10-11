import mongoose from 'mongoose'

const domicilioSchema= new mongoose.Schema({
  calle:{
    type:String,
    required:true
  },
  Numero:{
    type:String,
    required:true,
  },
  Colonia:{
    type:String,
    required:true,
  },
  Ciudad:{
    type:String,
    required:true,
  },
  Codigo_Postal:{
    type:String,
    required:true
  },
})
export const Domicilio = mongoose.model('Domicilio',domicilioSchema);