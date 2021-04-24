import express from 'express';
// para revisar mensajes desde le servidor, respuestas conexiones
import  morgan from 'morgan'
import exphbs from 'express-handlebars';
//definimos rutas fijas de acceso al path del server
import path from 'path';
//entrada arutas de frontend y backend
import router from './routes/index'

//delcaracion servidor
const app= express();

//setting
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname,'views'))

//propiedades de funcionamiento hbs
app.engine('.hbs', exphbs({
  extname:'.hbs',
  defaultLayout: 'main',
  //funciones de ayuda para hbs
  helpers:{
  }
}));
app.set('view engine','.hbs')

//middlewares
app.use(morgan('dev'));// para ver respuesta en consola
app.use(express.urlencoded({extended:false}))

//static Files
app.use(express.static(path.join(__dirname, 'public')));// carpeta publica

//routes
app.use('/', router)//acceso a las rutas
export default app;