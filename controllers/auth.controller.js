import {UserGeneral} from '../db/schemas/userSchema.js'
import {ProgramaEducativo} from '../db/schemas/programaEducativoSchema.js';
import {Alumno} from '../db/schemas/studentSchema.js'
import { Telefono } from '../db/schemas/telefonoSchema.js';
import { Email } from '../db/schemas/correoSchema.js';
import { Domicilio } from '../db/schemas/domicilioSchema.js';
import { EstatusAcademico } from '../db/schemas/estatusAcademicoSchema.js';
import {Rol} from '../db/schemas/rolSchema.js';


export const main_page = async (req,res)=>{
  try{
    const carreras = ['Ingenieria del software', 'Fisioterapia','Gastronomia'];
    const roles=['Docente','Estudiante','admin'];
    let carrerasDB = await ProgramaEducativo.find();
    let rolesDB=await Rol.find()
    if(carrerasDB.length<1){
      for(let idx=0;idx<carreras.length;idx++){
        let carrera=carreras[idx]
        
        let program = await ProgramaEducativo.findOne({carrera})
        
        if (await ProgramaEducativo.findOne({carrera}) == null){
          program =new ProgramaEducativo({carrera})
          await program.save(); 
        }
      }
    }
    if(rolesDB.length==0){
      for(let idx=0;idx<roles.length;idx++){
        let rol = roles[idx]
        
        let rol1 =await Rol.find()
        if (await Rol.findOne({rol}) == null){
          rol1 =new Rol({rol})
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
  try {
    const {Clave,Name,lastName,programaEducativo,psw,numero_Afiliacion,fecha_nacimiento,correo,lada,telefono,promedio,creditos,calle, colonia, ciudad,numero, codigoPostal} = req.body;
    console.log(Clave)
    if (Clave.length<=6){
      if(Name||!lastName||!programaEducativo||!psw){
        throw new Error('Faltan datos por completar')
      }
      let rol = await Rol.findOne({rol:'Docente'})
      let program = await ProgramaEducativo.findOne({carrera:programaEducativo})
      let user = await UserGeneral.findOne({Clave:Clave})
      if(user) throw new Error(`El usuario con clave ${Clave} ya se encuentra registrado`)
      // user = new UserGeneral({Clave:Clave,Name:Name,lastName:lastName,RolId:rol.id,programaEducativoId:program.id,psw:psw})

      // await user.save()
      console.log()
      console.log(error)
      return res.status(403).json({error:error.message})
    }else if(Clave.length>=6 && Clave.length<=8 ){
      if(!Name||!lastName||!programaEducativo||!psw||!numero_Afiliacion||!fecha_nacimiento||!correo||!lada||!telefono||!promedio||!creditos||!calle||!colonia||!ciudad||!numero||!codigoPostal){
        throw new Error('Faltan datos por completar')
      }
      let rol = await Rol.findOne({rol:'Estudiante'})
      let rolId = rol.id
      let program = await ProgramaEducativo.findOne({carrera:programaEducativo})
      let user = await UserGeneral.findOne({Clave:Clave})
      if(user) throw new Error(`El usuario con clave ${Clave} ya se encuentra registrado`)

      user = new UserGeneral({Clave:Clave,Name:Name,lastName:lastName,RolId:rolId,programaEducativoId:program.id,psw:psw})
      await user.save()
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({error:error.message}) 
  }
}

export const refreshToken = (req,res)=>{

};

export const logout = (req,res)=>{

};

export const info= async (req,res)=>{
  
  try{
    
    let program = await ProgramaEducativo.find({})
    // console.log(program)
    let carreras = []

    for(let i=0; i<program.length;i++){
      carreras.push([program[i].id,program[i]['carrera']])
    }
    
    // console.log(carreras)
    res.status(200).render('data',{titulo:'DATA',value:2,carreras:carreras})
  }catch(error){
    console.log(error)
    res.status(403).json({error:error.message})
  }
};

