import 'dotenv/config';
import '../db/conectdb.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '../routes/auth.route.js'
import path from 'path';
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const app = express()

// const whiteList = [process.env.ORIGIN1]

// app.use(cors({
//   origin:function (origin,callback) {
//     if(whiteList.includes(origin)){
//       return callback(null,origin);
//     }
//     return callback('No autorizado por CORS'+origin)
//   },
// }));

//ruta base del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use('api/v1/auth',authRoutes)

//engine
app.set('view engine','ejs')

//templates
app.set('views',path.join(__dirname,'../diseño/view'))

//Archivos estaticos y publicos
app.use(express.static(path.join(__dirname,'../public')))

//rutas del servidor
app.use('/',authRoutes)

//excepcion de ruta no encontrada
app.use((req,res,next)=>{
  res.status(404).render('404',{Title:404,description:"Parece que te has perdido",
  message:"La pagina que estas buscando no esta disponible"})
})

//configutacion e inicializacion de puertos
const PORT = process.env.PORT||5000;
const APP_DEPLOY = process.env.APP_DEPLOY||"http://127.0.0.1:"

//inicializacion de puertos
app.listen(PORT,()=>{
   console.log(APP_DEPLOY+PORT)
})
