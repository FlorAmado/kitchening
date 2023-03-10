const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses')

/* detras del require hay un module.exports
ctrl + click y nos lleva a la ruta/enrrutador
*/

const app = express();

// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

app.use(logger('dev'));
app.use(express.json());// estas lineas son necesarias para usar req.body
app.use(express.urlencoded({ extended: false }));// estas lineas son necesarias para usar req.body, para q me llegue un objeto y poder parsear
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

/* rutas 
indexRouter y usersRouter son enrrutadores
segun la peticion me deriva a un enrrutador
organizando como index, users, login, register, productos,etc

los enrrutadores ayudan en la comunicacion de las Vistas y Controladores
sin ruta no hay medio de comunicacion entre ellas
*/
app.use('/', indexRouter); //http://localhost:3000 esta url es interpretada por el servidor
app.use('/users', usersRouter);//http://localhost:3000/users asi lo interpreta
app.use('/courses',coursesRouter);//http://localhost:3030/products
/*  veniamos trabajando asi
app.use('/', (req,res)=> res.sendFile('rutas absolutas)) 

requiriendo una funcion callback, pero no es una buena practica.

pero ahora no recibe un callback sino que recibe un requerimiento a otro archivo con express generator
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
