const {operation}=require('./mongodriver.js');
const insert=(credentials)=>
{const url="mongodb://localhost/nudity-null";
const url1="mongodb+srv://iob:iob@cluster0-b9lxd.mongodb.net/nudity-null?retryWrites=true&w=majority";
operation(url1,credentials);}
module.exports={insert};