const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv/config');
 
app.use(express.json());
app.use(cors());


//Main Route
app.get('/',(req,res)=>{
    res.send("Homepage");
});


//Importing Routes
const regRoute = require('./routes/register.js');
app.use('/register',regRoute);

const logRoute = require('./routes/login.js');
app.use('/login',logRoute);

const getAllRoute = require('./routes/getAllBooks');
app.use('/getAllBooks',getAllRoute);

const getBookIdRoute = require('./routes/getBookbyId');
app.use('/getBookbyId',getBookIdRoute);

const removeBookRoute = require('./routes/removeBook');
app.use('/removeBook',removeBookRoute);

const takeBookRoute = require('./routes/takeThisBook');
app.use('/takeThisBook',takeBookRoute);

//Connection to DB
mongoose.connect(process.env.DB_connection,()=>{
    console.log('DB connected');
});

app.listen(3000);