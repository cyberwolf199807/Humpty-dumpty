const mongoose=require('mongoose');
const schema=require('./modelschema.js');
var bodyparse=require('body-parser');
async function operation(url,credentials)
{ 

await mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{flag=1;console.log("Loggedin")});

await new schema(credentials).save();
mongoose.connection.close();
}

 function find(url)
 
{
    var ab=new mongoose.Schema({
        contact_name: {type: String,required: "Contact Name is required"},
        contact_email:{type: String,required: "Contact Email is required"},
        password:     {type: String,required: "Password is required"}},
        {collection: 'master'});
    const abc=mongoose.model('abc',ab);
    
    abc.findOne({"":""},(err,res)=>console.log(res));
    
     
}
find("mongodb://localhost/nudity-null");

module.exports={operation};

