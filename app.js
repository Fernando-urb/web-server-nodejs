import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'parciales'));

// Servir contenido estático
app.use(express.static(path.join(__dirname, 'public')));

// Ruta específica
app.get('/', (_req, res) => {
    res.render('home', {
        nombre: "fernando urbano",
        titulo: "curso de node"
    });
});



app.get('/generic', (_req, res) => {
    res.render('generic',{
        nombre: "maria celeste",
        titulo: "curso de nodejs"
    });
});

app.get('/elements', (_req, res) => {
    res.render('elements',{
        nombre: "noah urbano",
        titulo: "curso de node"
    });
});

// Ruta comodín para 404
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
