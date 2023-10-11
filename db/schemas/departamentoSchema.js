import mongoose from 'mongoose'

const departamentoSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  }
})

export const Departamento = mongoose.model('Departamento',departamentoSchema);