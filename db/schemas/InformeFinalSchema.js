import mongoose, { Mongoose } from 'mongoose'

const informeFinalSchema=new mongoose.Schema({
  alumnoId:{
    type:mongoose.Types.ObjectId,
    ref:"UserGeneral",
  },
  Preguntas:{
    type:mongoose.Types.Array,
    required:false
  }
})

export const InformeFinal = mongoose.model('InformeFinal',informeFinalSchema);