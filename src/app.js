const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection'),
	  expressValidator = require('express-validator'),
      flash = require('express-flash'),
	  cookieParser = require('cookie-parser'),
      session = require('express-session');
      bodyParser = require('body-parser');

const app = express();

/**
 * This module shows flash messages
 * generally used to show success or error messages
 * 
 * Flash messages are stored in session
 * So, we also have to install and use 
 * cookie-parser & session modules
 */ 

app.use(cookieParser('keyboard cat'));
app.use(session({ 
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));


// importing routes
const utilisateurRoutes = require('./routes/utilisateur');
const roleRoutes = require('./routes/role');
const reservationRoutes = require('./routes/reservation');
const typeRoutes = require('./routes/type');
const etatRoutes = require('./routes/etat');
const locationRoutes = require('./routes/location');
const parcoursRoutes = require('./routes/parcours');
const pointsRoutes = require('./routes/points');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'location_velo'
}, 'single'));
app.use(express.urlencoded({extended: false}));
app.use(expressValidator());
//app.use(express.cookieParser('keyboard cat'));
//app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(flash());

// routes
app.use('/admin/user', utilisateurRoutes);
app.use('/admin/role', roleRoutes);
app.use('/admin/reservation', reservationRoutes);
app.use('/admin/type', typeRoutes);
app.use('/admin/etat', etatRoutes);
app.use('/admin/locations', locationRoutes);
app.use('/admin/parcours', parcoursRoutes);
app.use('/admin/points', pointsRoutes);


// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
