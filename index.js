import express, { urlencoded } from 'express';
import router from './routes/index.js';
const app = express();

// Variable de puerto
const port = process.env.PORT || 4000;

// Habilitar ejs y se configura dirección
app.set('view engine', 'ejs');

// Agregar Router
app.use('/', router);

// Definir la carpeta publica
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

