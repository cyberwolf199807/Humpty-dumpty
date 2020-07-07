const express=require('express');
const router=require('./routes/routeposts.js');
const router1=require('./middleware.js');
const app=express();
const middle=(req,res,next)=>{console.log("request received for"+req.url);next();};
app.use(middle);
app.use(router1.route);
app.use(express.static('Public'));
app.listen(process.env.PORT || 5001,()=>console.log("Working"));