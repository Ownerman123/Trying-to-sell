require('dotenv').config();
// Importing required modules
const express = require('express');
const session = require('express-session');
const createError = require('http-errors');
const cloudinary = require('cloudinary').v2;
const multer =  require('multer');
const axios = require('axios');

cloudinary.config({ 
  cloud_name: "drmzgx5pw", 
  api_key: "664175232868797", 
  api_secret: "1xhnVAvtMkLjIL3uYNaXZdPWeK8" // Click 'View Credentials' below to copy your API secret
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Creating an express application
const app = express();

// Setting the port for the server
const PORT = process.env.PORT || 3001;

// Importing router from controllers
const router = require('./controllers');

// Importing express-handlebars to use handlebars as the view engine
const exphbs = require('express-handlebars');

// Importing helpers for handlebars
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');


// Creating an instance of express-handlebars with the imported helpers
const hbs = exphbs.create({ helpers });

// Setting handlebars as the view engine for the express application
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Using middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session management middleware
app.use(session({
  secret: 'your secret key', // Secret key for signing the session ID cookie
  resave: false, // Forces the session to be saved back to the session store
  saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
}));

// Middleware for serving static files from the "public" directory
app.use(express.static('public'));

// Using the imported router
app.use(router);

// Route for the home page
app.get('/', (req, res) => {
    res.send('hello');
});

// Error handling middleware for handling 404 errors
app.use((req, res, next) => {
  next(createError(404));
});

// Error handling middleware for handling other errors
app.use((err, req, res, next) => {
  // If the error object does not have a status, set it to 500
  res.status(err.status || 500);
  // Send the error message as the response
  res.send(err.message);
});

// Starting the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});