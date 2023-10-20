import express from 'express';
import {main_page,login,logout,register,refreshToken,info} from '../controllers/auth.controller.js';
import {body} from 'express-validator'
import { validatorExpress } from '../middlewares/validatorExpress.js';

const router = express.Router();

router.get('/',main_page);

router.post('/register',register)

router.get('/data',info)
export default router;