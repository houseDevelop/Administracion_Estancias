import mongoose from 'mongoose'

const empresaSchema = new mongoose.Schema({
  Nombre:{
    type:String,
    required:true
  },
  RazonSocial:{
    type:String,
    required:true
  },
  Giro_Empresarial:{
    type:String,
    required:true
  },
  Sector:{
    type:String,
    required:true
  },
  Responsable:{
    type:String,
    required:true
  },
  Coreo:{
    type:mongoose.Types.ObjectId,
    required:true
  },
  Domicilio:{
    type:mongoose.Types.ObjectId,
    required:true
  },
  Telefono:{
    type:mongoose.Types.ObjectId,
    required:true
  },
})

export const Empresa = mongoose.model('Empresa',empresaSchema);