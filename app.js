const express = require('express');
const session = require('express-session');
const passport = require('./passport-config');
const cookieParser = require('cookie-parser');
// const dashboardRoutes = require('./routes/dashboard');
const env =  require('dotenv')

env.config({path: './env'})

const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL encoded bodies as sent by HTML forms
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'ini12@Yhu#',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
// app.use('/', dashboardRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(300, () => console.log('Server running on http://localhost:300'));
