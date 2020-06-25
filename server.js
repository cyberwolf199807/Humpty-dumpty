const express=require('express');
const app=express();
app.use(express.static('Public'));
app.listen(process.env.PORT || 5001,()=>console.log("Working"));