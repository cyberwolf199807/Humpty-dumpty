const dotenv=require('dotenv');
const express=require('express');
const routes=require('./Routes/routes.js')
const app=express();
//use Public as a static folder for express
app.use(express.static('Public')); 
//use Routes for middleware to direct Routes
app.use("/",routes);
dotenv.config();
app.listen(process.env.PORT||4001,()=>console.log("Listening on Port "+(process.env.PORT || 4001)));


