import mongoose from 'mongoose'

const alumnoSchema=new mongoose.Schema({
  user_id:{
    type:mongoose.Types.ObjectId,
    required:true
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
    required:true
  },
  Correo:{
    type:mongoose.Types.ObjectId,
    required:true,
  },
  Telefono:{
    type:mongoose.Types.ObjectId,
    required:true
  },
  statusAcademico_Id:{
    type:mongoose.Types.ObjectId,
    required:true
  }
})

export const Alumno = mongoose.model('Alumno',alumnoSchema);