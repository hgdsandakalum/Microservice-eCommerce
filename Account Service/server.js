require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Importing Account Route
const accountRoute = require('./controllers/accountController');

//Route Middlware
app.use('/account', accountRoute);

mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});