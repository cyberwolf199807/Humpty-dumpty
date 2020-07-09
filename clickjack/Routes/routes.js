const bodyparser=require('body-parser');
const express=require('express');
const post=require('./posts.js');
var bodyparse=require('body-parser');
const { urlencoded } = require('express');
var postencoder=bodyparse.urlencoded({extended: false});
const app=express();
const router=express.Router();
app.use(bodyparse.urlencoded({extended: true}));
app.use(bodyparse.json());
//Listening to a server
router.get('/toto',post.getrequest);
router.post('/',postencoder,(req,res)=>{console.log(req.body.title)});
router.post('/to',postencoder,post.postrequest);
module.exports=router;