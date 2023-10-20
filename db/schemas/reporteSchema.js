import mongoose from 'mongoose'

const reporteSchema=new mongoose.Schema({
  alumnoId:{
    type:mongoose.Types.ObjectId,
    ref:'UserGeneral',
  },
  perido:{
    type:String,
    required:true
  },
  horasSemana:{
    type:Number,
    requierd:true
  },
  totalHoras:{
    type:Number,
    required:true,
  }
  
})

export const Reporte = mongoose.model('Reporte',reporteSchema);