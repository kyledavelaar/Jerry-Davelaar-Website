const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const userController = require('./user/userController');
// const gifController = require('./gif/gifController');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const cookieController = require('./cookieController');
const path = require('path');
const cors = require('cors');
const sslRedirect = require('heroku-ssl-redirect').default;

app.use(sslRedirect());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, {'Content-Type': 'json/application'}, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  next();
});

// mongoose.connect('mongodb://localhost/giferent');

// mongoose.connection.once('open', () => console.log('connected to database'))

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cookieParser());

// app.use('/createUser', cookieController.setCookie);


// app.get('/checkCookie', cookieController.isLoggedIn);

app.use(express.static(path.join(__dirname, '../build/')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/', 'index.html'))
})

// app.get('/ping', function (req, res) {
//   return res.send('pong');
// });

// app.post('/createUser', userController.createUser);

// app.post('/verifyUser', userController.verifyUser);

// app.post('/createGif', gifController.createGif);

// app.get('/sendGif', gifController.sendGifs);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('server connected to port', PORT));
