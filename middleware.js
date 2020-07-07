const express=require('express');
const routes1=require('./routes/routeposts.js');
var driver=require('./mongomiddleware');
const { pathToFileURL } = require('url');
var bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.json());
var postencoder=bodyparser.urlencoded({extended: false});
const route=express.Router();
route.post('/signup',postencoder,(req,res)=>{
    driver.insert(req.body);
    res.redirect("/humpty-dumpty1");
    });
route.get('/',routes1.e1);
route.get('/secondroute',routes1.e2);
route.get('/humpty-dumpty',routes1.e3);
route.get('/humpty-dumpty1',routes1.e4);
route.get('/css/fontawesome-all.min.css',routes1.e5);
route.get('/css/tooplate-style.css',routes1.e6);
route.get('/css/bootstrap.min.css',routes1.e7);
route.get('/css/magnific-popup.css',routes1.e8);
route.get('/slick/slick.css',routes1.e9);
route.get('slick/slick-theme.css',routes1.e10);
route.get('/css/tooplate-style.css',routes1.e11);
route.get('/js/jquery-3.2.1.min.js',routes1.e12);
route.get('/js/jquery.magnific-popup.min.js',routes1.e13);
route.get('/js/jquery.backstretch.min.js',routes1.e14);
route.get('/slick/slick.min.js',routes1.e15);
route.get('/img/gallery-img-01-tn.jpg',routes1.e16);
route.get('/img/gallery-img-02-tn.jpg',routes1.e17);
route.get('/img/gallery-img-03-tn.jpg',routes1.e18);
route.get('/img/gallery-img-04-tn.jpg',routes1.e19);
route.get('/img/gallery-img-05-tn.jpg',routes1.e20);
route.get('/img/gallery-img-06-tn.jpg',routes1.e21);
route.get('/webfonts/fa-solid-900.woff2',routes1.e22);
route.get('/webfonts/fa-brands-400.ttf',routes1.e23);
route.get('/slick/slick-theme.css',routes1.e24);
route.get('/img/nav-item.png',routes1.e25);
route.get('/img/nav-item-highlight.png',routes1.e26);
route.get('/img/constructive_bg_01.jpg',routes1.e27);
route.get('/img/constructive_bg_02.jpg',routes1.e28);
route.get('/img/constructive_bg_03.jpg',routes1.e29);
route.get('/img/constructive_bg_04.jpg',routes1.e30);
route.get('/img/constructive_bg_05.jpg',routes1.e31);
route.get('/img/constructive_bg_06.jpg',routes1.e32);
route.get('/webfonts/fa-brands-400.woff2',routes1.e33);
route.get('/webfonts/fa-brands-400.woff',routes1.e34);
route.get('/img/constructive_bg_01.jpg',routes1.e35);
route.get('/slick/slick-theme.css',routes1.e36);
route.get('/css/bootstrap.min.css.map',routes1.e37);











module.exports={route};