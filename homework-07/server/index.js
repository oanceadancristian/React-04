require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const signInRoute = require('./routes/signin');
const signUpRoute = require('./routes/signup');
const editProfileRoute = require('./routes/edit_profile');

connection();

app.use(express.json());
app.use(cors());

app.use('/api/signin', signInRoute);
app.use('/api/signup', signUpRoute);
app.use('/api/edit_profile', editProfileRoute);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}`));
