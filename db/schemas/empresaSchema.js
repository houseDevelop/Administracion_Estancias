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
  coreoId:{
    type:mongoose.Types.ObjectId,
    ref:"Email"
  },
  domicilio:{
    type:mongoose.Types.ObjectId,
    ref:"Domicilio"
  },
  telefonoId:{
    type:mongoose.Types.ObjectId,
    ref:"Telefono"
  },
})

export const Empresa = mongoose.model('Empresa',empresaSchema);