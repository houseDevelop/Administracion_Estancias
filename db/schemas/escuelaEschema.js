import mongoose from 'mongoose'

const escuelaSchema = new mongoose.Schema({
  clave:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  },
  Unidad:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  },
  programaEducativoId:{
    type:mongoose.Types.ObjectId,
    ref:'ProgramaEducativo',
  },
  domicilioId:{
    type:mongoose.Types.ObjectId,
    ref:"Domicilio"
  },
  telefonoId:{
    type:mongoose.Types.ObjectId,
    ref:'Telefono'
  }
})

export const Escuela = mongoose.model('Escuela',escuelaSchema);