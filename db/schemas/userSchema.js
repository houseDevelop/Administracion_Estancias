import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const userGenSchema = new mongoose.Schema(
  {
    Clave:{
      type:String,
      required:true,
      unique:true,
      index:{unique:true}
    },
    Name:{
      type:String,
      required:true,
    },
    lastName:{
      type:String,
      required:true
    },
    RolId:{
      type:mongoose.Types.ObjectId,
      required:true,
    },
    programaEducativoId:{
      type: mongoose.Types.ObjectId,
      required:true
    },
    psw:{
      type:String,
      required:true
    }
  }
);
userGenSchema.pre('save',async function(next){
  const user =this;
  if(!user.isModified('psw'))return next();
  try{
    const salt = await bcrypt.getSalt(10);
    user.psw = await bcrypt.hash(user.psw,salt);
    next();

  }catch(error){
    console.log(error);
    throw new Error("Error al codificar la contraseña")
  }
})

userGenSchema.methods.comparePassword =async function(candidatePassword){
  return await bcrypt.compare(candidatePassword,this.psw)
}

export const UserGeneral = mongoose.model('UserGeneral',userGenSchema);