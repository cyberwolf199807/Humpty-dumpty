const express=require('express');
const app=express();
app.get('/first',(req,res)=>res.sendFile(__dirname+'/Public/indo1.html'));
app.use(express.static('Public'));
app.listen(process.env.PORT || 5001,()=>console.log("Working"));