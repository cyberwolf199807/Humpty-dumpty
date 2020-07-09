var encrypt=require('../Encrypt/encrypt.js');
var mongo=require('./mongomiddleware');
var schema=require('../Schemas/postschema.js');
var flash=require('connect-flash');
const express=require('express');
const app=express();
app.use(flash());
module.exports.getrequest=(req,res,next)=>{
    req.flash("Success","Sppl");
res.json({post: [{title: "Prakhar"},{password: "Shikhar"}]});
next();
}
module.exports.postrequest=(req,res,next)=>{
    console.log(req.body);
    var post=new schema(req.body);
    mongo.open_con();
    console.log(req.body.body+" "+req.body.password);
    post.save((err,res)=>{
        if(!schema.findOne({title: req.title}))
        {
            // console.log(encrypt.encrypt_pass(req.body.password));
            if(err!=null)
            console.log(err);
        else
           console.log(res+" And its done");
        }
        else
        console.log("User exists");
    });
        // mongo.close_con();
    res.send("Done");
}