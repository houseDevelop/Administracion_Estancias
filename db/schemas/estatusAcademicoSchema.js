import mongoose from 'mongoose';

const estatusAcademicoSchema = new mongoose.Schema({
  promedio:{
    type:mongoose.Types.Decimal128,
    required:true
  },
  creditosAcademicos:{
    type:Number,
    required:true
  }
})

export const EstatusAcademico = mongoose.model('EstatusAcademico',estatusAcademicoSchema);