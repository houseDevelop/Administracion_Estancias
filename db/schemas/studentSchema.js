import mongoose from 'mongoose'

const alumnoSchema=new mongoose.Schema({
  user_id:{
    type:mongoose.Types.ObjectId,
    ref:'UserGeneral'
  },
  Numero_Afiliacion:{
    type:String,
    required:true
  },
  Fecha_Nacimiento:{
    type:mongoose.SchemaTypes.Date,
    required:true
  },
  Domicilio:{
    type:mongoose.Types.ObjectId,
    ref:"Domicilio"
  },
  Correo:{
    type:mongoose.Types.ObjectId,
    ref:'Email',
  },
  Telefono:{
    type:mongoose.Types.ObjectId,
    ref:"Telefono"
  },
  statusAcademico_Id:{
    type:mongoose.Types.ObjectId,
    ref:'EstatusAcademico'
  }
})

export const Alumno = mongoose.model('Alumno',alumnoSchema);