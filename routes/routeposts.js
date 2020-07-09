var validurl=require('../validurl');
var checknuditycontent=require('../checknuditycontent');
const e1=(req,res)=>res.end("Portugal Wins the match works the same as node");
const e2=(req,res)=>res.end("Second Route worked");
const e3=(req,res)=>res.end("Third Route worked");
const e4=(req,res)=>res.sendFile(__dirname+'/index.html');
const e5=(req,res)=>res.sendFile(__dirname+'/css/fontawesome-all.min.css');
const e6=(req,res)=>res.sendFile(__dirname+'/css/tooplate-style.css');
const e7=(req,res)=>res.sendFile(__dirname+'/css/bootstrap.min.css');
const e8=(req,res)=>res.sendFile(__dirname+'/css/magnific-popup.css');
const e9=(req,res)=>res.sendFile(__dirname+'/slick/slick.css');
const e10=(req,res)=>res.sendFile(__dirname+'slick/slick-theme.css');
const e11=(req,res)=>res.sendFile(__dirname+'/css/tooplate-style.css');
const e12=(req,res)=>res.sendFile(__dirname+'/js/jquery-3.2.1.min.js'); 
const e13=(req,res)=>res.sendFile(__dirname+'/js/jquery.magnific-popup.min.js'); 
const e14=(req,res)=>res.sendFile(__dirname+'/js/jquery.backstretch.min.js');
const e15=(req,res)=>res.sendFile(__dirname+'/slick/slick.min.js');
const e16=(req,res)=>res.sendFile(__dirname+'/img/gallery-img-01-tn.jpg');
const e17=(req,res)=>res.sendFile(__dirname+'/img/gallery-img-02-tn.jpg');
const e18=(req,res)=>res.sendFile(__dirname+'/img/gallery-img-03-tn.jpg');
const e19=(req,res)=>res.sendFile(__dirname+'/img/gallery-img-04-tn.jpg');
const e20=(req,res)=>res.sendFile(__dirname+'/img/gallery-img-05-tn.jpg');
const e21=(req,res)=>res.sendFile(__dirname+'/img/gallery-img-06-tn.jpg');
const e22=(req,res)=>res.sendFile(__dirname+'/webfonts/fa-solid-900.woff2');
const e23=(req,res)=>res.sendFile(__dirname+'/webfonts/fa-brands-400.ttf');
const e24=(req,res)=>res.sendFile(__dirname+'/slick/slick-theme.css');
const e25=(req,res)=>res.sendFile(__dirname+'/img/nav-item.png');
const e26=(req,res)=>res.sendFile(__dirname+'/img/nav-item-highlight.png');
const e27=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_01.jpg');
const e28=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_02.jpg');
const e29=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_03.jpg');
const e30=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_04.jpg');
const e31=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_05.jpg');
const e32=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_06.jpg');
const e33=(req,res)=>res.sendFile(__dirname+'/webfonts/fa-brands-400.woff2');
const e34=(req,res)=>res.sendFile(__dirname+'/webfonts/fa-brands-400.woff');
const e35=(req,res)=>res.sendFile(__dirname+'/img/constructive_bg_01.jpg');
const e36=(req,res)=>res.sendFile(__dirname+'/slick/slick-theme.css');
const e37=(req,res)=>res.sendFile(__dirname+'/css/bootstrap.min.css.map');
const e38=(req,res)=>res.sendFile(__dirname+'1.mp4');
const e39=(req,res)=>res.sendFile(__dirname+'3.mp4');
const e40=(req,res)=>{
    console.log(req.body)
    // const ad=[];
    // ad.add(req.body.name);
const ob={};
ob.searchurl=req.body.name;
ob.isurlvalid=validurl(req.body.name)==1?"Yes":"No";
var x=(checknuditycontent(req.body.name));
ob.sexuallyexplicit=(x || true);
console.log(ob);
res.json(ob);}




module.exports={e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18,e19,e20,e21,e22,e23,e24,e25,e26,e27,e28,e29,e30,e31,e32,e33,e34,e35,e36,e37,e38,e39,e40};