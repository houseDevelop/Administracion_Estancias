import express from 'express';
import {main_page,login,logout,register,refreshToken,info} from '../controllers/auth.controller.js';
import {body} from 'express-validator'
import { validatorExpress } from '../middlewares/validatorExpress.js';

const router = express.Router();

router.get('/',main_page);

router.post('/register',[body('email','Ingrese un email valido').trim().isEmail().normalizeEmail(),
body('password','Contraseña minimo 6 caracteres').trim().isLength({min:6}).custom((value,{req})=>{
  if (value!== req.body.repassword){
    throw new Error("No coinciden las contraseñas")
  }
  return value;
}),
],validatorExpress,register)

router.get('/data',info)
export default router;