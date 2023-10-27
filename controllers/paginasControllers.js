const paginaInicio = (req,res) => {
    res.render('inicio', 
        {tituloweb: 'Inicio', tipo: 'Actualización de tramite'}
    )
}

const paginaCentros = (req,res) => {
    res.render('centros', 
        {tituloweb: 'Centros Receptores', tipo: 'Centros Receptores'}
    )
}

const paginaAdmin = (req,res) => {
    res.render('admin', 
        {tituloweb: 'Administrador', tipo: 'Docente Educativo'}
    )
}

const paginaRegMaestro = (req,res) => {
    res.render('regMaestro', 
        {tituloweb: 'Detalles Maestro', tipo: 'Información Maestro'}
    )
}

const paginaAsigSalon = (req,res) => {
    res.render('asigSalon', 
        {tituloweb: 'Listado Salones', tipo: 'Listado de Salones'}
    )
}

const paginaRegSalon = (req,res) => {
    res.render('regSalon', 
        {tituloweb: 'Detalles Salón', tipo: 'Información Salón'}
    )
}

const solicitudInscripcion = (req,res) => {
    res.render('solicitud', 
        {tituloweb: 'Solicitud de inscripción', tipo: 'Registro'}
    )
}

const login = (req,res) => {
    res.render('login', 
        {tituloweb: 'Iniciar Sesión', tipo: 'Sesion'}
    )
}

const registro = (req,res) => {
    res.render('registro', 
        {tituloweb: 'Registrar Cuenta', tipo: 'Registro'}
    )
}

const paginaAlumnos = (req,res) => {
    res.render('alumnos', 
        {tituloweb: 'Listado de Alumnos', tipo: 'Listado de Alumnos'}
    )
}

const paginaAlumno = (req,res) => {
    res.render('alumno', 
        {tituloweb: 'Reportes', tipo: 'Reportes'}
    )
}


export {
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
}