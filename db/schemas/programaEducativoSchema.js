import mongoose from "mongoose";

const programaEducativoSchema=new mongoose.Schema({
  carrera:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  }
})

export const ProgramaEducativo = mongoose.model('ProgramaEducativo',programaEducativoSchema);