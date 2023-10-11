import mongoose from 'mongoose'

const estanciaSchema = new mongoose.Schema({
  nombrePlan:{
    type:String,
    required:true
  },
  fechaInicio:{
    type:mongoose.SchemaTypes.Date,
    required:true
  },
  fechaFinal:{
    type:mongoose.SchemaTypes.Date,
    required:true,
  },
  Horario:{
    type:String,
    required:true
  },
  ActividadesID:{
    type:mongoose.Types.ObjectId,
    required:true
  }
})

export const Estancia = mongoose.model('Estancia',estanciaSchema);