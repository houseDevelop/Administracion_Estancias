import {UserGeneral} from '../db/schemas/userSchema.js'
import {ProgramaEducativo} from '../db/schemas/programaEducativoSchema.js';
import {Rol} from '../db/schemas/rolSchema.js';


export const main_page = async (req,res)=>{

  const carrera = ['Ingenieria del software', 'Fisioterapia','Gastronomia'];
  const rol=['Docente','Estudiante','admin'];
  try{
    let carreras = await ProgramaEducativo.find({});
    let roles=await Rol.find({})
    if(carreras.length==0){
      for(let idx=0;idx<=carrera.length;idx++){
        let program = await ProgramaEducativo.findOne({carrera:carrera[idx]})
        console.log(program)
        if (program.$isEmpty()){
          program =new ProgramaEducativo({carrera:carrera[idx]})
          await program.save(); 
        }
      }
    }
    if(roles.length==0){
      for(let idx=0;idx<=rol.length;idx++){
          let rol1 = await Rol.findOne({rol:rol[idx]})
          if (rol1.$isEmpty()){
            rol1 =new Rol({rol:rol[idx]})
            await rol1.save();
          }

      }
    }

  }catch(error){
    console.log(error)
    return res.status(403).json({error:error.message});
  }
  
  
  res.status(200).render('index',{titulo:"Index"})
  
  
}; 

export const login=async (req,res)=>{

}

export const register = async(req,res)=>{
  const {Clave,Name,lastName,programaEducativo,psw} = req.body;
  if (Clave.length<=6){
    try{
      let rol = await Rol.findOne({rol:'Docente'})
      let program = await ProgramaEducativo.findOne({carrera:programaEducativo})
      let user = await UserGeneral.findOne({Clave:Clave})
      if(user) throw new Error(`El usuario con clave ${Clave} ya se encuentra registrado`)

      user = new UserGeneral({Clave:Clave,Name:Name,lastName:lastName,RolId:rol.id,programaEducativoId:program.id,psw:psw})

      await user.save()

    }catch(error){
      console.log(error)
      return res.status(403).json({error:error.message})
    }
   
  }else if(Clave.length>=6 && Clave.length()<=8 ){
    const {numero_Afiliacion,fecha_nacimiento,correo,lada,telefono,promedio,creditos,calle, colonia, ciudad,numero, codigoPostal}=req.body
    try{
      let rol = await Rol.findOne({rol:'Docente'})
      let program = await ProgramaEducativo.findOne({carrera:programaEducativo})
      let user = await UserGeneral.findOne({Clave:Clave})
      if(user) throw new Error(`El usuario con clave ${Clave} ya se encuentra registrado`)

      user = new UserGeneral({Clave:Clave,Name:Name,lastName:lastName,RolId:rol.id,programaEducativoId:program.id,psw:psw})

      await user.save()
        
    }catch(error){
      console.log(error);
      return res.status(403).json({error:error.message})
    }
  }
}

export const refreshToken = (req,res)=>{

};

export const logout = (req,res)=>{

};

export const info= async (req,res)=>{
  
  try{
    
    let program = await ProgramaEducativo.find({}).lean()
    // console.log(program)
    // console.log(carreras)
    res.status(200).render('data',{titulo:'DATA',value:1,carreras:program})
  }catch(error){
    console.log(error)
    res.status(403).json({error:error.message})
  }
};

