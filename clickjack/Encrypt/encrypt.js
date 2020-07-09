const express=require('express');
const app=express();
var bcrypt=require('bcrypt');
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({urlencoded: true}));
encrypt_pass=(password)=>bcrypt.genSalt(process.env.SALT_FACTOR,function(err,salt){
    if(err==null)
    bcrypt.hash(password,salt,function(err,hash)
        {
                if(err==null)
                    return hash;
                else
                    return err;
        })
    else
    return err;
})
console.log(encrypt_pass("sdffd"));
(bcrypt.hash("sdfs",10,function(err,hash){console.log(hash)}));