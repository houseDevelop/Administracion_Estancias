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
    required:true,
  },
  domicilioId:{
    type:mongoose.Types.ObjectId,
    required:true
  },
  telefonoId:{
    type:mongoose.Types.ObjectId,
    required:true
  }
})

export const Escuela = mongoose.model('Escuela',escuelaSchema);