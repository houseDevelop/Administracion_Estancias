import express from 'express';
import {
    paginaInicio,
    paginaCentros,
    paginaAdmin,
    paginaRegMaestro,
    paginaAsigSalon,
    paginaRegSalon,
    solicitudInscripcion,
    login,
    registro,
    paginaAlumno,
    paginaAlumnos
} from '../controllers/paginasControllers.js';

const router = express.Router();

router.get('/', login);

router.get('/Registro', registro);

router.get('/Alumno', paginaInicio);

router.get('/Alumno/Centros', paginaCentros);

router.get('/Alumno/Solicitud', solicitudInscripcion);

router.get('/Admin', paginaAdmin);

router.get('/Admin/RegMaestro', paginaRegMaestro);

router.get('/Admin/AsigSalon', paginaAsigSalon);

router.get('/Admin/RegSalon', paginaRegSalon);

router.get('/Maestro', paginaAlumnos)

router.get('/Maestro/alumno', paginaAlumno)



export default router;